import { BiEnvelope, BiHomeAlt } from "react-icons/bi";
import {
    FiMessageSquare,
    FiPackage,
    FiUser,
    FiLinkedin,
    FiMenu,
  } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
    TbSettings,
    TbBrandTwitter,
    TbBrandFacebook,
    TbBrandInstagram,
  } from "react-icons/tb";
  import {
    PK,
    IR,
    IN,
    CH,
    BD,
    US,
    AF,
    SR,
    PL,
    TK,
  } from "country-flag-icons/react/3x2";
  
export const notify = [
  { id: 1, heading: "5 new sales", para: "tque quaerat libero maiores vel." },
  {
    id: 2,
    heading: "$3.000 in average profits",
    para: "Aut aut ullam eum possimus.",
  },
  {
    id: 3,
    heading: "200 new tweets",
    para: "Fugiat praesentium soluta amet non.",
  },
  { id: 4, heading: "2 new items", para: "Fugit eaque molestias et aut." },
  {
    id: 5,
    heading: "51 registered users",
    para: "Labore aut voluptas molestias illo.",
  },
];

export const progressBarData = [
  { id: 1, heading: "Mobile app development", para: 33, color: "red" },
  {
    id: 2,
    heading: "Deploy github project",
    para: 50,
    color: "blue",
  },
  {
    id: 3,
    heading: "Customer development",
    para: 66,
    color: "green",
  },
  { id: 4, heading: "Database backup", para: 25, color: "yellow" },
  {
    id: 5,
    heading: "Release version 1.4",
    para: 80,
    color: "brown",
  },
];

export const apps = [
  {
    id: 0,
    avatarIcon: <BiHomeAlt />,
    text: "Home",
  },
  {
    id: 1,
    avatarIcon: <FiUser />,
    text: "Account",
  },
  {
    id: 2,
    avatarIcon: <FiMessageSquare />,
    text: "Comments",
  },
  {
    id: 3,
    text: "Settings",
    avatarIcon: <TbSettings />,
  },
  {
    id: 4,
    text: "Maps",
    avatarIcon: <HiOutlineLocationMarker />,
  },
  {
    id: 5,
    text: "Twitter",
    avatarIcon: <TbBrandTwitter className="text-sky-500" />,
  },
  {
    id: 6,
    text: "Facebook",
    avatarIcon: <TbBrandFacebook className="text-sky-600" />,
  },
  {
    id: 7,
    text: "Instagram",
    avatarIcon: <TbBrandInstagram className="text-sky-600" />,
  },
  {
    id: 8,
    text: "Linkedin",
    avatarIcon: <FiLinkedin className="text-sky-600" />,
  },
];

export const countries = [
    {
      id: 0,
      avatarIcon: <PK className="h-6 w-6" />,
      text: "Pakistan",
    },
    {
      id: 1,
      avatarIcon: <IR className="h-6 w-6" />,
      text: "Iran",
    },
    {
      id: 2,
      avatarIcon: <CH className="h-6 w-6" />,
      text: "China",
    },
    {
      id: 3,
      avatarIcon: <IN className="h-6 w-6" />,
      text: "India",
    },
    {
      id: 4,
      avatarIcon: <BD className="h-6 w-6" />,
      text: "Bangaladesh",
    },
    {
      id: 5,
      avatarIcon: <US className="h-6 w-6" />,
      text: "USA",
    },
    {
      id: 6,
      avatarIcon: <AF className="h-6 w-6" />,
      text: "Afghanistan",
    },
    {
      id: 7,
      avatarIcon: <SR className="h-6 w-6" />,
      text: "Srilanaka",
    },
    {
      id: 8,
      avatarIcon: <PL className="h-6 w-6" />,
      text: "Plastine",
    },
    {
      id: 9,
      avatarIcon: <TK className="h-6 w-6" />,
      text: "Turkey",
    },
  ];

  export const solutions = [
    { name: "Teams", description: "Minima quasi sunt.", href: "#", icon: "01" },
    { name: "Blog", description: "Possimus non dolor.", href: "#", icon: "02" },
    {
      name: "Meetups",
      description: "Cupiditate aliquid magnam.",
      href: "#",
      icon: "03",
    },
    {
      name: "Advertise with us",
      description: "Doloribus modi cum.",
      href: "#",
      icon: "04",
    },
    {
      name: "Features",
      description: "Voluptatum suscipit minima.",
      href: "#",
      icon: "05",
    },
    {
      name: "Job board",
      description: "Magnam quae quia.",
      href: "#",
      icon: "06",
    },
  ];

