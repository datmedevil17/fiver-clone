// "use client";
// import React from "react";
// import { motion} from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// export const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children
// }) => {
//   return (
//     (<div onMouseEnter={() => setActive(item)} className="relative ">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className="cursor-pointer text-white hover:opacity-[0.9] px-4 py-2 rounded-full hover:bg-slate-800/80 transition-all duration-200">
//         {item}
//       </motion.p>
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           transition={transition}>
//           {active === item && (
//             <div
//               className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 // layoutId ensures smooth animation
//                 layoutId="active"
//                 className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
//                 <motion.div
//                   // layout ensures smooth animation
//                   layout
//                   className="w-max h-full p-4">
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>)
//   );
// };

// export const Menu = ({
//   setActive,
//   children
// }) => {
//   return (
//     (<nav
//       // resets the state
//       onMouseLeave={() => setActive(null)}
//       className="flex items-center space-x-4">
//       {children}
//     </nav>)
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   href,
//   src
// }) => {
//   return (
//     (<Link href={href} className="flex space-x-2">
//       <Image
//         src={src}
//         width={140}
//         height={70}
//         alt={title}
//         className="flex-shrink-0 rounded-md shadow-2xl" />
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
//           {title}
//         </h4>
//         <p className="text-white text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </Link>)
//   );
// };

// export const HoveredLink = ({
//   children,
//   ...rest
// }) => {
//   return (
//     (<Link
//       {...rest}
//       className="text-white dark:text-neutral-200 hover:text-black ">
//       {children}
//     </Link>)
//   );
// };


// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// const transition = {
//   type: "spring",
//   mass: 0.5,
//   damping: 11.5,
//   stiffness: 100,
//   restDelta: 0.001,
//   restSpeed: 0.001,
// };

// export const MenuItem = ({
//   setActive,
//   active,
//   item,
//   children
// }) => {
//   const handleClick = (e) => {
//     e.stopPropagation();
//     setActive(active === item ? null : item);
//   };

//   return (
//     <div onClick={handleClick} className="relative group">
//       <motion.p
//         transition={{ duration: 0.3 }}
//         className={`cursor-pointer text-white px-4 py-2 rounded-full 
//           transition-all duration-200 ease-in-out
//           hover:bg-gray-700/50 
//           ${active === item ? 'bg-gray-700/50' : ''}
//           group-hover:text-gray-200`}>
//         {item}
//       </motion.p>
//       {active !== null && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.85, y: 10 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.85, y: 10 }}
//           transition={transition}>
//           {active === item && (
//             <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
//               <motion.div
//                 transition={transition}
//                 layoutId="active"
//                 className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
//                 <motion.div
//                   layout
//                   className="w-max h-full p-4">
//                   {children}
//                 </motion.div>
//               </motion.div>
//             </div>
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export const Menu = ({
//   setActive,
//   children
// }) => {
//   React.useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('nav')) {
//         setActive(null);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [setActive]);

//   return (
//     <nav className="flex items-center space-x-4">
//       {children}
//     </nav>
//   );
// };

// export const ProductItem = ({
//   title,
//   description,
//   href,
//   src
// }) => {
//   return (
//     <Link 
//       href={href} 
//       className="flex space-x-2 p-2 rounded-lg transition-all duration-200 hover:bg-gray-700/50">
//       <Image
//         src={src}
//         width={140}
//         height={70}
//         alt={title}
//         className="flex-shrink-0 rounded-md shadow-2xl" />
//       <div>
//         <h4 className="text-xl font-bold mb-1 text-white">
//           {title}
//         </h4>
//         <p className="text-white text-sm max-w-[10rem] dark:text-neutral-300">
//           {description}
//         </p>
//       </div>
//     </Link>
//   );
// };

// export const HoveredLink = ({
//   children,
//   ...rest
// }) => {
//   return (
//     <Link
//       {...rest}
//       className="block w-full px-4 py-2 text-white rounded-lg
//         transition-all duration-200
//         hover:bg-gray-700/50 hover:text-gray-200">
//       {children}
//     </Link>
//   );
// };

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    setActive(active === item ? null : item);
  };

  return (
    <div onClick={handleClick} className="relative group">
      <motion.div
        transition={{ duration: 0.3 }}
        className={`cursor-pointer text-white px-4 py-2 rounded-full 
          transition-all duration-200 ease-in-out
          hover:bg-gray-700/50 hover:text-gray-400
          ${active === item ? 'bg-gray-700/50' : ''}
          inline-flex items-center gap-1`}>
        <span>{item}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 opacity-60 translate-y-[1px]
            ${active === item ? 'rotate-180' : 'rotate-0'}`}
        />
      </motion.div>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 10 }}
          transition={transition}>
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl">
                <motion.div
                  layout
                  className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav')) {
        setActive(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setActive]);

  return (
    <nav className="flex items-center space-x-4">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link href={href} className="flex space-x-2 group">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white hover:text-gray-400 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-white text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className="block text-white transition-colors duration-200 hover:text-gray-400">
      {children}
    </Link>
  );
};