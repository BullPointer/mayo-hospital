import { Icon } from "@iconify/react";

const BigscreenNavbar = () => {
  return (
    <ul className="w-full hidden lg:flex flex-row flex-1">
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
        <p className="text-base text-sb">Research & Education at Mayo Clinic</p>{" "}
        <Icon icon="ep:arrow-down-bold" fontSize={20} />
      </li>
    </ul>
  );
};

export default BigscreenNavbar;
