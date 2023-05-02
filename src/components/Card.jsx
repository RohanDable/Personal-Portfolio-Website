// import React from "react";
// import { motion } from "framer-motion";

// const Card = ({ title, description, link, projects }) => {
//   return (
//     <motion.div
//       initial={"hidden"}
//       whileInView={"visible"}
//       variants={{
//         visible: { opacity: 1 },
//         hidden: { opacity: 0 },
//       }}
//       className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
//     >
//       <a href={link}>
//         <img
//           className="rounded-t-lg w-full"
//           src="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
//           alt=""
//         />
//       </a>
//       <div className="p-5">
//         <a href={link}>
//           <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {title}
//           </h5>
//         </a>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//           {description}
//         </p>
//         <div className="flex justify-between items-center">
//           <span className="text-gray-500 font-medium">
//             {projects} {projects === 1 ? "project" : "projects"}
//           </span>
//           <a
//             href={link}
//             className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
//           >
//             Read more
//             <svg
//               className="ml-2 -mr-1 w-4 h-4"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Card;

import React from "react";


const Card = ({ title, link, image }) => {
  return (
    <a href={link} className="box">
      <div
        className="box__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="box__title">{title}</div>
    </a>
  );
};

export default Card;
