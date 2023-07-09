import { Icon } from "@iconify/react";
import BigscreenNavbar from "./BigscreenNavbar";

const Navbar = () => {
  return (
    <div className="w-full min-h-auto my-0 absolute z-10 bg-white flex flex-row justify-between items-center border-b-4 p-3">
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
        <li className="lg:hidden">
          <Icon icon="fe:bar" fontSize={25} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
