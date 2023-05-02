// import Card from "./Card";

// const ProjectList = () => {
//   const projects = [
//     {
//       title: "Project 1",
//       link: "https://example.com/project1",
//       image: "https://example.com/project1-image.jpg",
//     },
//     {
//       title: "Project 2",
//       link: "https://example.com/project2",
//       image: "https://example.com/project2-image.jpg",
//     },
//     {
//       title: "Project 3",
//       link: "https://example.com/project3",
//       image: "https://example.com/project3-image.jpg",
//     },
//     // add more projects as needed
//   ];

//   return (
//     <div className="project-list">
//       {projects.map((project, index) => (
//         <Card
//           key={index}
//           title={project.title}
//           link={project.link}
//           image={project.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProjectList;

import React from "react";
import { motion } from "framer-motion";



const ProjectList = () => {
  const projects = [
    {
      title: "IT-Logger",
      link: "https://github.com/RohanDable/IT-LOGGER",
      image:
        "https://user-images.githubusercontent.com/22851920/63442723-98dad380-c401-11e9-89e4-e3600a0d9290.PNG",
    },
    {
      title: "Sorting Visualizer",
      link: "https://github.com/RohanDable/Sorting-Visualizer-For-Algorithms",
      image: "https://broyojo.com/projects/sorting/example.png",
    },
    {
      title: "Github Finder",
      link: "https://github.com/RohanDable/github-finder-1",
      image:
        "https://repository-images.githubusercontent.com/522235643/f1721e31-f471-4714-bbd7-d055956306ab",
    },
    {
      title: "Random Quote Generator",
      link: "https://github.com/RohanDable/Quote-Generator-React",
      image:
        "https://repository-images.githubusercontent.com/455191176/28ee7d37-5de3-4cae-8aec-0dd3bb15b5bb",
    },
    // add more projects as needed
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      initial={"hidden"}
      animate={"visible"}
      variants={container}
      className="flex flex-wrap justify-center"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={item}
          className="w-full md:w-1/3 p-4 flex justify-center"
        >
          <div className="relative">
            <a href={project.link}>
              <img
                className="rounded-lg shadow-md transition-all duration-300 hover:shadow-lg w-full"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute inset-0 rounded-lg bg-black opacity-40 transition-all duration-300 hover:opacity-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold text-center">
                  {project.title}
                </h3>
              </div>
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectList;
