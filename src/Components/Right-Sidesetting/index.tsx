import React, { FC, useState } from "react";
import {Menu,} from "@headlessui/react";
import {TbSettings,} from "react-icons/tb";
import { useAppContext } from "../../context/state";
interface IProps {
    isOpen: boolean;
    setIsOpen: (value : boolean) => void 
}
const RightSidesetting: FC<IProps> = ({setIsOpen, isOpen}) => {
    return(
        <Menu as="div" className="relative  flex-shrink-0 ">
                  <div>
                    {isOpen && (
                      <button
                        className=" flex text-xl text-white items-center cursor-pointer fixed right-6 top-4 z-50"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center justify-between w-48 ">
                          <div className="text-sm font-semibold">SETTINGS</div>
                          <div>x</div>
                        </div>
                      </button>
                    ) }

                    <div
                      className={`border-l-2 border-gray-100 top-0 right-0 w-[19vw] bg-white-500  text-white fixed h-full z-40  ease-in-out ${
                        isOpen ? "translate-x-0 " : "translate-x-full "
                      }`}
                    >
                      <div className="w-full h-16 bg-blue-500"></div>
                      <div className="px-8">
                        <div className=" py-6">
                          <h2 className="font-bold py-2 text-gray-900">
                            DEMOS
                          </h2>
                          <p className="py-2 text-gray-700">Light background</p>
                          <p className="py-2 text-gray-700">Dark background</p>
                          <p className="py-2 text-gray-700">Small sidebar</p>
                        </div>
                        <div>
                          <h2 className="font-bold py-2 text-gray-900">
                            TOGGLE SIDEBAR
                          </h2>
                          <div></div>
                        </div>
                        <div>
                          <h2 className="font-bold py-2 text-gray-900">
                            COLORS
                          </h2>
                          <p className=" py-2 text-gray-500">BACKGROUND</p>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Menu>
    )
}

export default RightSidesetting;