/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Icon } from "@iconify/react";

const NavBox = ({ link, text }) => {
  return (
    <div className="p-6 cursor-pointer hover:bg-blue-500 ">
      <Icon className="text-white" icon={link} fontSize={25} />
      <div className="text-lg text-white pt-4 w-fit hover:border-b-2">{text}</div>
    </div>
  );
};

const commonStyle =
  "bg-white flex flex-row justify-between items-end p-5 border-t hover:text-blue-600 cursor-pointer text-black";

const SmallscreenNavbar = () => {
  return (
    <>
      <div className="w-full bg-blue-600 border-t-4 xsm:hidden grid grid-cols-2">
        <NavBox
          link={"teenyicons:appointments-outline"}
          text={"Request appointment"}
        />
        <NavBox link={"bx:donate-heart"} text={"Donate"} />
        <NavBox
          link={"medical-icon:infectious-diseases"}
          text={"Diseases & conditions"}
        />
        <NavBox link={"solar:stethoscope-bold"} text={"Find a doctor"} />
      </div>
      <ul className="w-full lg:hidden flex flex-col flex-1">
        <li className={commonStyle}>
          <p className="text-xl">Care at Mayo Clinic</p>{" "}
          <Icon icon="ep:arrow-down-bold" fontSize={20} />
        </li>
        <li className={commonStyle}>
          <p className="text-xl">Health Library</p>{" "}
          <Icon icon="ep:arrow-down-bold" fontSize={20} />
        </li>
        <li className={commonStyle}>
          <p className="text-xl">For Medical Professionals</p>{" "}
          <Icon icon="ep:arrow-down-bold" fontSize={20} />
        </li>
        <li className={commonStyle}>
          <p className="text-xl">Research & Education at Mayo Clinic</p>{" "}
          <Icon icon="ep:arrow-down-bold" fontSize={20} />
        </li>
      </ul>
    </>
  );
};

export default SmallscreenNavbar;
