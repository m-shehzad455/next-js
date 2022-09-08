import { Fragment } from "react";
import { useState } from "react";
import Image from "next/image";
import {
  Disclosure,
  Menu,
  Transition,
  Dialog,
  Popover,
} from "@headlessui/react";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  TbSettings,
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
} from "react-icons/tb";
import { MdNotificationsNone, MdLogout } from "react-icons/md";
import { FiMessageSquare, FiPackage, FiUser, FiLinkedin } from "react-icons/fi";
import { BiEnvelope, BiHomeAlt } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
import Progressbar from "../Progressbar/index";

const notify = [
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

const progress = [
  { id: 1, heading: "Mobile app development", para: "33%" },
  {
    id: 2,
    heading: "Deploy github project",
    para: "50%",
  },
  {
    id: 3,
    heading: "Customer development",
    para: "66%",
  },
  { id: 4, heading: "Database backup", para: "25%" },
  {
    id: 5,
    heading: "Release version 1.4",
    para: "80%",
  },
];

const apps = [
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

const countries = [
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

const solutions = [
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

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(true);
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
            <div className="flex h-16 justify-between">
              <div className="flex flex-1 items-center justify-center px-2 lg:justify-between ">
                <div className="w-full max-w-lg lg:max-w-xs flex">
                  <div className="toggle  lg:ml-10">
                    <US  className="h-6 w-6 "/>
                  </div>
                  <div className="input">
                  <label htmlFor="search" className="sr-only">
                    Search...
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="focus:outline-none block w-2xl rounded-full border-none bg-gray-100 bg-white py-3 pl-10 pr-3 lg:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                  </div>

              <div className="explore">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900 " : "",
                          " inline-flex items-center  bg-white text-base  focus:outline-none"
                        )}
                      >
                        <span className="text-sm ">EXPLORE</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "",
                            "ml-2 h-5 w-5 transition duration-150 ease-in-out"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md  sm:px-0 lg:max-w-xl">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              {solutions.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-6 flex items-start  p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                                >
                                  <div className="h-8 w-8 flex flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white font-semibold text-xl">
                                    {item.icon}
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base text-sm text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </div>
          </div>

              </div>

              <div className="hidden lg:flex lg:items-center">
                {/* Profile dropdown */}

                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm ">
                      <span className="sr-only">Open user menu</span>
                      <US className="h-6 w-6" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex justify-between">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block  px-3  text-sm text-gray-700 space-y-3 "
                            )}
                          >
                            {" "}
                            <h1 className="border-b-2 text-sm pb-2">
                              CHANGE COUNTRY
                            </h1>
                            <div className="flex flex-wrap justify-between ">
                              {countries.map((items) => (
                                <div className="flex text-sm  w-[35%] py-3">
                                  <div>
                                    <h1>{items.avatarIcon}</h1>
                                  </div>

                                  <div>
                                    <h1>{items.text}</h1>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm ">
                      <span className="sr-only">Open user menu</span>
                      <FiPackage className="h-6 w-6" aria-hidden="true" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block  px-3  text-sm text-gray-700 space-y-3 "
                            )}
                          >
                            {" "}
                            <h1 className="border-b-2 text-sm pb-2">MY APPS</h1>
                            <div className="flex flex-wrap">
                              {apps.map((items) => (
                                <div className=" text-sm  w-[33%] py-4 ">
                                  <span className="flex justify-center items-center text-2xl">
                                    <h1>{items.avatarIcon}</h1>
                                  </span>
                                  <h1 className="flex justify-center items-center ">
                                    {items.text}
                                  </h1>
                                </div>
                              ))}
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm ">
                      <span className="sr-only">Open user menu</span>
                      <FiMessageSquare className="h-6 w-6" aria-hidden="true" />
                      <span className=" flex  justify-center items-center text-white rounded-full bg-sky-500  inline-flex relative -top-2 right-3 w-4 h-4 bg-red-500">
                        5
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block  px-3  text-sm text-gray-700 space-y-3"
                            )}
                          >
                            {" "}
                            <h1 className="border-b-2 text-sm pb-2">
                              PROJECT STATUS
                            </h1>
                            {progress.map((items) => (
                              <div className="text-sm flex justify-between">
                                <div>
                                  <h1 className="font-semibold font-900 pb-2">
                                    {items.heading}
                                  </h1>
                                  <span className="w-3 ">
                                    <Progressbar />
                                  </span>
                                </div>

                                <p>{items.para}</p>
                              </div>
                            ))}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm">
                      <span className="sr-only">Open user menu</span>
                      <MdNotificationsNone
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block  px-3 py-3 text-sm text-gray-700 space-y-3"
                            )}
                          >
                            {notify.map((items) => (
                              <div className="text-sm">
                                <h1 className="font-semibold font-900">
                                  {items.heading}
                                </h1>
                                <p>{items.para}</p>
                              </div>
                            ))}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <Menu.Button className=" relative flex rounded-full bg-white text-sm  focus:ring-indigo-500 focus:ring-offset-2">
                      <img
                        className="h-8 w-8 rounded-full relative
                        "
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className=" flex  justify-center items-center text-white rounded-full bg-red-500  inline-flex relative -top-2 right-3 w-4 h-4 bg-red-500">
                        2
                      </span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-3 px-4 space-y-4 text-sm">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex justify-between"
                            )}
                          >
                            <div className="flex justify-between items-center space-x-2">
                              <div className="flex items-center">
                                <BiEnvelope className="h-6 w-6 " />
                              </div>
                              <div>Inbox</div>
                            </div>

                            <div className="text-sm h-4 w-4 flex text-center justify-center  text-white rounded-full bg-red-500 ">
                              2
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex justify-between"
                            )}
                          >
                            <div className="flex justify-between items-center space-x-2">
                              <div className="flex items-center">
                                <AiOutlineStar className="h-6 w-6 " />
                              </div>
                              <div>Messages</div>
                            </div>

                            <div className="text-sm h-4 w-4 flex text-center justify-center  text-white rounded-full bg-blue-500 ">
                              3
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex justify-between"
                            )}
                          >
                            <div className="flex justify-between items-center space-x-2">
                              <div className="flex items-center">
                                <FiUser className="h-6 w-6 " />
                              </div>
                              <div>Profile</div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "flex justify-between"
                            )}
                          >
                            <div className="flex justify-between items-center space-x-2">
                              <div className="flex items-center">
                                <MdLogout className="h-6 w-6 " />
                              </div>
                              <div>Logout</div>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <Menu as="div" className="relative  flex-shrink-0">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm ">
                      <span className="sr-only">Open user menu</span>
                      <TbSettings className="h-6 w-6" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div>
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <div className="fixed inset-0" />

                <div className="fixed inset-0 overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                      <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                      >
                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                          <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            <div className="px-4 sm:px-6">
                              <div className="flex items-start justify-between">
                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                  Panel title
                                </Dialog.Title>
                                <div className="ml-3 flex h-7 items-center">
                                  <button
                                    type="button"
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={() => setOpen(false)}
                                  >
                                    <span className="sr-only">Close panel</span>
                                    <XMarkIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                              {/* Replace with your content */}
                              <div className="absolute inset-0 px-4 sm:px-6">
                                <div
                                  className="h-full border-2 border-dashed border-gray-200"
                                  aria-hidden="true"
                                />
                              </div>
                              {/* /End replace */}
                            </div>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>
          </div>

          {/* <Disclosure.Panel className="">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600  hover:bg-gray-50 hover:text-gray-800"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600  hover:bg-gray-50 hover:text-gray-800"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600  hover:bg-gray-50 hover:text-gray-800"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-500">tom@example.com</div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 rounded-full p-1"
                >
                  <span className="sr-only">View notifications</span>
                  <MdNotificationsNone className="h-6 w-6 " aria-hidden="true"/>
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
