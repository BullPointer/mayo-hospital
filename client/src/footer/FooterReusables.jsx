/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import footerData from "../utils/footerData";
import { boxData } from "./TopFooterData";

export const BoxFunc = () => {
  return (
    <>
      {boxData.map((data, index) => (
        <div
          key={index}
          className="w-[80%] flex flex-row justify-between items-center p-4 hover:border-2 rounded-xl border cursor-pointer"
        >
          <div className="flex flex-row items-center p-2 gap-4">
            <Icon className="text-white" icon={data.iconLogo} fontSize={25} />
            <div className="text-white text-[14px]">{data.text}</div>
          </div>
          <div>
            {" "}
            <Icon
              className="text-white"
              icon={data.iconArrow}
              fontSize={16}
            />{" "}
          </div>
        </div>
      ))}
    </>
  );
};

export const FooterList = ({ title, name }) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center gap-2 py-2">
        <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
          {title}
        </h1>
        <Icon className="text-white" icon="ep:arrow-right-bold" fontSize={16} />
      </div>
      {footerData[name].map(({ text }, index) => (
        <div
          key={index}
          className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
        >
          {text}
        </div>
      ))}
    </>
  );
};

export const FollowMeFunc = ({ link }) => {
  return (
    <div className="rounded-full border-white border p-2 cursor-pointer hover:border-2">
      <Icon icon={link} className="text-white" fontSize={20} />
    </div>
  );
};
