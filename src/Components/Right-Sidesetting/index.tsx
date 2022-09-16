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
        <Menu as="div" className="relative  flex-shrink-0">
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
                      className={`border-l-2 border-gray-100 top-0 right-0 w-[19vw] bg-white-500  text-white fixed h-full z-40 ${
                        isOpen ? "translate-x-0 " : "translate-x-full "
                      }`}
                    >
                      <div className="w-full h-16 bg-blue-500"></div>
                      <div className="px-8">
                        <div className=" py-6">
                          <h2 className="font-bold py-2 text-gray-900">
                            DEMOS
                          </h2>
                          <button className="py-2 text-gray-700">Light background</button>
                          <button className="py-2 text-gray-700">Dark background</button>
                          <button className="py-2 text-gray-700">Small sidebar</button>
                        </div>
                        <div>
                          <h2 className="font-bold py-2 text-gray-900">
                            TOGGLE SIDEBAR
                          </h2>

<label className="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" className="sr-only peer" />
  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label>

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