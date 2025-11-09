// This is a Vercel Serverless Function, not part of your React app.
// It will be run by Vercel on the schedule.

export const config = {
  runtime: 'edge',
};

export default (request: Request) => {
  // 1. Check the 'Authorization' header
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }

  // 2. If authorized, call the deploy hook
  // We use "fetch" to "click" the hook URL.
  fetch(process.env.DEPLOY_HOOK_URL!, {
    method: 'POST',
  }).catch((err) => {
    console.error('Error triggering deploy hook:', err);
    return new Response('Error triggering deploy', { status: 500 });
  });

  // 3. Respond immediately
  return new Response('Deploy triggered successfully.', {
    status: 200,
  });
};