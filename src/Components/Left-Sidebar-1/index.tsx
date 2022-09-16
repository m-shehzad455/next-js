// import React from "react";
// import Link from "next/link";
// import Home from "../../Assets/images/home.png";
// import Documents from "../../Assets/images/report.png";
// import Reports from "../../Assets/images/video.png";
// import Logo from "../../Assets/images/logo3.png";
// import IsOpen from "../../Assets/images/Plaved-WL-Black-BG.png"
// import { ClassNames } from "../../Utils/string";
// import { useAppContext } from "../../context/state";
// import { AiOutlineMenuUnfold, AiOutlineSetting } from "react-icons/ai";
// import Image from "next/image";

// const sidebarNavigation = [
//   { title: "Inicio", href: "/", icon: Home, current: true },
//   {
//     title: "Informes y actas",
//     href: "videoSessionScreen",
//     icon: Reports,
//     current: true,
//   },
//   { title: "Documentos", href: "report", icon: Documents, current: true },
// ];

// const Sidebar = () => {
//   const { isSidebarOpen, setIsSidebarOpen } = useAppContext();
//   return (
//     <div className="fixed z-[999] groupes md:flex-col md:fixed md:inset-y-0 rounded-2xl mx-2 my-2 mb-4 h-[98vh] flex bg-plaved-2 fixed z-10">
//       <div className="flex-1 flex flex-col min-h-0 bg-plaved-2 rounded-2xl py-4 my-4 mx-4 item-center justify-center">
//         <div
//           className={` ${
//             isSidebarOpen ? "w-32" : "w-10 relative  flex-1 flex flex-col pb-4"
//           } bg-dark-purple h-full`}
//         >
//           <span
//             className={`${
//               !isSidebarOpen
//                 ? "absolute cursor-pointer -right-20 z-10  text-black h-8 w-10 rounded-full"
//                 : " absolute cursor-pointer -right-12 z-10  text-black h-8 w-10 rounded-full"
//             }`}
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           >
//             {" "}
//             <AiOutlineMenuUnfold className="text-gray-500 h-5 w-5" />
//           </span>
//           <div className="flex gap-x-4 items-center">
//             {isSidebarOpen ? 
//               <Image  alt="Logo"
//               src={IsOpen}
//               width="400px"
//               height="120px"/> : <Image
//               alt="Logo"
//               src={Logo}
//               width="400px"
//               height="300px"
//               className={`cursor-pointer w-80 h-80 duration-500 ${
//                 isSidebarOpen && ""
//               }`}
//             />
//             }
//           </div>
//           <div className="flex flex-col mt-2 space-y-12">
//             {sidebarNavigation.map((item, index: number) => {
//               return (
//                 <Link href={item.href} key={index}>
//                   <div
//                     key={index}
//                     className={`group cursor-pointer ${
//                       !isSidebarOpen
//                         ? "text-red-500 flex items-center justify-center"
//                         : "flex items-center justify-start space-x-4 group-hover:block"
//                     }
//                  ${item.current ? "mt-9" : "mt-2"} ${
//                       index === 0 && "bg-light-white"
//                     } `}
//                   >
//                     <Image
//                       alt="icon"
//                       src={item.icon}
//                       className={ClassNames(
//                         item.current
//                           ? "text-white group"
//                           : "text-white group-hover:text-gray-500 w-full",
//                         "flex-shrink-0 h-6"
//                       )}
//                       aria-hidden="true"
//                     />
//                     <span
//                       className={`${
//                         !isSidebarOpen && "hidden"
//                       } text-white duration-200  text-[16 px] font-normal font-600`}
//                     >
//                       {item.title}
//                     </span>
//                     <div className="p-3 overflow-hidden absolute bg-white rounded-2xl -left-8 group-hover:block overflow-hidden text-white hidden"></div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//         <div className="group flex flex-col items-center">
//           <div className="p-3 absolute bg-white rounded-r-xl -left-4 group-hover:block overflow-hidden text-white hidden"></div>

//           <a
//             href="#"
//             className={` ${
//               !isSidebarOpen
//                 ? "text-red-500 flex items-center justify-center"
//                 : "flex items-center justify-start mr-10 group-hover:block"
//             }`}
//           >
//             <div className="flex justify-center items-center text-white space-x-0">
//               <AiOutlineSetting
//                 className={ClassNames(
//                   "flex items-center justify-center text-white w-full flex-shrink-0 h-6"
//                 )}
//                 aria-hidden="true"
//               />
//               <span
//                 className={`${
//                   !isSidebarOpen && "hidden"
//                 } origin-left text-white duration-200  text-[16px] font-normal font-600`}
//               >
//                 Ajustes
//               </span>
//             </div>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Sidebar;

const LeftSidebar  = () => {
       return(
        <div className="fixed w-32">
            <h1>Hello World</h1>
          
        </div>
       )
}

export default LeftSidebar;
