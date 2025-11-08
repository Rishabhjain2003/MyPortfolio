import fs from 'fs';
import path from 'path'; // Import path module

// Load environment variables from .env.local
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const USERNAME = process.env.VITE_GITHUB_USERNAME;
const TOKEN = process.env.VITE_GITHUB_TOKEN;

const query = `
query {
  user(login: "${USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          homepageUrl
          openGraphImageUrl
        }
      }
    }
  }
}
`;

async function fetchProjects() {
  if (!TOKEN || !USERNAME) {
    console.error('Error: Missing VITE_GITHUB_USERNAME or VITE_GITHUB_TOKEN in .env.local');
    console.log('Please create a .env.local file with your GitHub username and token.');
    return;
  }

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed: ${response.statusText}`);
  }

  const data = await response.json();
  const pinnedRepos = data.data.user.pinnedItems.nodes;

  const transformedProjects = pinnedRepos.map(repo => ({
    title: repo.name,
    description: repo.description,
    image: repo.openGraphImageUrl,
    github: repo.url,
    demo: repo.homepageUrl
  }));

  // --- This is the new/improved part ---
  const dataDir = path.resolve('src/data');
  const dataPath = path.join(dataDir, 'projects.json');

  // Ensure the 'src/data' directory exists
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
    console.log('Created src/data directory.');
  }
  // --- End of new part ---

  // Save the data to a JSON file
  fs.writeFileSync(
    dataPath,
    JSON.stringify(transformedProjects, null, 2)
  );

  console.log(`Successfully fetched and saved pinned projects to ${dataPath}`);
}

fetchProjects();