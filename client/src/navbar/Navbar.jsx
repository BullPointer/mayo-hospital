import { Icon } from "@iconify/react";
import { useState } from "react";
import BigscreenNavbar from "./BigscreenNavbar";
import SmallscreenNavbar from "./SmallscreenNavbar";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-auto my-0 z-10 absolute bg-white">
      <div className="w-full flex flex-row justify-between items-center p-3">
        <div className="w-auto lg:w-full h-[100%] p-0 xsm:p-2 flex flex-row justify-start items-center gap-4">
          <div className="flex cursor-pointer font-medium font-serif px-4 xsm:px-8">
            MAYO <br /> CLINIC
          </div>
          <BigscreenNavbar />
        </div>
        <ul className="w-full h-[100%] p-2 flex flex-row gap-7 xsm:gap-4 justify-end items-center">
          <li className="hidden xsm:flex font-[500] lg:font-semibold text-sm lg:text-lg hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
            Request appointment
          </li>
          <li className="hidden xsm:flex font-[500] lg:font-semibold text-sm lg:text-lg hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
            Donate
          </li>
          <li className="flex flex-row gap-2 items-center font-[500] lg:font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
            <Icon icon="fluent-mdl2:contact" fontSize={20} />{" "}
            <div className=" text-sm lg:text-lg">Log in</div>
          </li>
          <li className="font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
            <Icon icon="zondicons:search" fontSize={20} />
          </li>
          {!showList ? (
            <li onClick={() => setShowList(true)} className="lg:hidden">
              <Icon icon="fe:bar" fontSize={25} />
            </li>
          ) : (
            <li onClick={() => setShowList(false)} className="lg:hidden">
              <Icon icon="ic:round-close" fontSize={25} />
            </li>
          )}
        </ul>
      </div>
      {showList && <SmallscreenNavbar />}
    </div>
  );
};
// first-letter:absolute
export default Navbar;
