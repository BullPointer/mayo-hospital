import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="absolute z-10 bg-white w-full flex flex-row justify-between items-center border-b-4 p-3">
      <div className="w-full h-[100%] p-2 flex flex-row justify-start items-center gap-4">
        <div className="flex cursor-pointer font-medium font-serif px-8">
          MAYO <br /> CLINIC
        </div>
        <ul className="w-full flex flex-row flex-1">
          <li className="flex flex-row items-end p-2 hover:text-blue-600 cursor-pointer hover:underline text-black ">
            <p className="text-base text-sb">Care at Mayo Clinic</p>{" "}
            <Icon icon="ep:arrow-down-bold" fontSize={20} />
          </li>
          <li className="flex flex-row items-end p-2 hover:text-blue-600 cursor-pointer hover:underline text-black">
            <p className="text-base text-sb">Health Library</p>{" "}
            <Icon icon="ep:arrow-down-bold" fontSize={20} />
          </li>
          <li className="flex flex-row items-end p-2 hover:text-blue-600 cursor-pointer hover:underline text-black">
            <p className="text-base text-sb">For Medical Professionals</p>{" "}
            <Icon icon="ep:arrow-down-bold" fontSize={20} />
          </li>
          <li className="flex flex-row items-end p-2 hover:text-blue-600 cursor-pointer hover:underline text-black">
            <p className="text-base text-sb">
              Research & Education at Mayo Clinic
            </p>{" "}
            <Icon icon="ep:arrow-down-bold" fontSize={20} />
          </li>
        </ul>
      </div>
      <ul className="w-full h-[100%] p-2 flex flex-row gap-4 justify-end items-center">
        <li className="font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
          Request appointment
        </li>
        <li className="font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
          Donate
        </li>
        <li className="flex flex-row gap-2 items-center font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
          <Icon icon="fluent-mdl2:contact" fontSize={20} /> <div>Log in</div>
        </li>
        <li className="font-semibold hover:text-blue-600 cursor-pointer hover:underline text-orange-950">
          <Icon icon="zondicons:search" fontSize={20} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
