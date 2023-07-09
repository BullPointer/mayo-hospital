import { Icon } from "@iconify/react";
import Img from "../assets/welcome_img.jpg";

const Welcome = () => {
  return (
    <div className="w-full h-screen">
      <div className="relative bg-black w-full h-[100%] max-h-max xsm:flex-shrink-0 grad">

        <img
          className=" w-full h-[100%] opacity-30 bg-cover"
          src={Img}
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        />
        <div className="w-full p-5 xsm:p-0 xsm:w-auto flex flex-col gap-y-5 avg:gap-y-10 absolute top-[60%] xsm:top-[75%] avg:top-[65%] left-0 xsm:left-8">
          <div className="text-white text-[38px] avg:text-6xl">
            Transformation is here.
          </div>
          <div className="flex flex-col xsm:flex-row gap-5 justify-start items-start xsm:items-center">
            <div className="flex flex-row justify-center items-end p-2 gap-2">
              <div className="text-xl text-white cursor-pointer hover:border-b-2">
                Find out more
              </div>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={15}
              />
            </div>
            <div className="w-full xsm:w-auto flex flex-row justify-center items-center gap-2 border rounded-full border-white p-3 text-white">
              <Icon icon="uit:calender" fontSize={25} />
              <div className="text-xl cursor-pointer hover:text-red-100">
                Request an appointment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
