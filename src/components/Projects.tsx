// import { Github, ExternalLink } from "lucide-react";

// const projects = [
//   {
//     title: "LiveLocationTracker",
//     description: "Real-time location streaming application that tracks users' positions via Socket.IO, using browser Geolocation API and rendering updates on interactive maps.",
//     image: "/images/project-live-location.png", // UPDATE THIS PATH
//     github: "https://github.com/rishabh/LiveLocationTracker", // UPDATE THIS LINK
//     demo: "#" // UPDATE THIS LINK
//   },
//   {
//     title: "CodeCast",
//     description: "Real-time collaborative code editor with multi-user support in shared rooms, featuring instant synchronization across clients with syntax highlighting.",
//     image: "/images/project-codecast.png", // UPDATE THIS PATH
//     github: "httpsS://github.com/rishabh/CodeCast", // UPDATE THIS LINK
//     demo: "#" // UPDATE THIS LINK
//   }
// ];

// export const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16 animate-fade-in">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-4">
//             My <span className="font-normal">Projects</span>
//           </h2>
//         </div>
        
//         <div className="space-y-16 md:space-y-24 animate-slide-up">
//           {projects.map((project, index) => {
//             const projectNumber = String(index + 1).padStart(2, '0');

//             const ProjectImage = (
//               <div className="flex items-center justify-center bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-auto"
//                 />
//               </div>
//             );
            
//             const ProjectText = (
//               // The container still provides the top padding for the text
//               <div className="relative pt-16 sm:pt-20">
                
//                 {/* HERE'S THE FIX:
//                   Changed 'top-0' to '-top-12' (which is -3rem).
//                   This shifts the number UP, creating space and 
//                   preventing it from overlapping the title.
//                 */}
//                 <span className="absolute -top-12 left-0 text-8xl sm:text-9xl font-bold text-white-800 opacity-50">
//                   {projectNumber}
//                 </span>
                
//                 {/* This content now sits correctly "on top" of the number */}
//                 <div className="relative"> 
//                   <h3 className="text-3xl font-bold mb-4">
//                     {project.title}
//                   </h3>
//                   <p className="text-zinc-400 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <div className="flex gap-4 mt-6">
//                     {project.github && (
//                       <a 
//                         href={project.github} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         aria-label={`${project.title} GitHub`}
//                         className="text-zinc-400 hover:text-white transition-colors"
//                       >
//                         <Github className="w-6 h-6" />
//                       </a>
//                     )}
//                     {project.demo && (
//                       <a 
//                         href={project.demo} 
//                         target="_blank" 
//                         rel="noopener noreferrer" 
//                         aria-label={`${project.title} Live Demo`}
//                         className="text-zinc-400 hover:text-white transition-colors"
//                       >
//                         <ExternalLink className="w-6 h-6" />
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );

//             return (
//               <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
//                 {index % 2 === 0 ? (
//                   // Even rows (0, 2): Image first
//                   <>
//                     {ProjectImage}
//                     {ProjectText}
//                   </>
//                 ) : (
//                   // Odd rows (1, 3): Text first
//                   <>
//                     {ProjectText}
//                     {ProjectImage}
//                   </>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Github, ExternalLink } from "lucide-react";
// 1. Import the projects from your new JSON file
import projects from "@/data/projects.json";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="font-normal">Projects</span>
          </h2>
        </div>
        
        {/* 2. The rest of your component logic is IDENTICAL! */}
        <div className="space-y-16 md:space-y-24 animate-slide-up">
          {projects.map((project, index) => {
            const projectNumber = String(index + 1).padStart(2, '0');

            const ProjectImage = (
              <div className="flex items-center justify-center bg-zinc-800 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-auto"
                />
              </div>
            );
            
            const ProjectText = (
              <div className="relative pt-16 sm:pt-20">
                <span className="absolute -top-12 left-0 text-8xl sm:text-9xl font-bold text-white-800 opacity-50">
                  {projectNumber}
                </span>
                
                <div className="relative"> 
                  <h3 className="text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`${project.title} GitHub`}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {/* Only show the demo link if it exists */}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`${project.title} Live Demo`}
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <div key={index} className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                {index % 2 === 0 ? (
                  <>
                    {ProjectImage}
                    {ProjectText}
                  </>
                ) : (
                  <>
                    {ProjectText}
                    {ProjectImage}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};