/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import Img1 from "../assets/medical_care.jpg";
import Img2 from "../assets/world_view.jpg";

const Services = () => {
  return (
    <div className="">
      <div className="grid grid-rows-2 xsm:grid-rows-1 xsm:grid-cols-2 grid-flow-col min-h-[700px]">
        <div className="flex flex-col bg-white justify-center items-center px-4 avg:px-32 order-first">
          <h1 className="text-4xl font-semibold font-mono">
            Healing starts here
          </h1>
          <div className="py-3">
            <h2 className="text-lg font-semibold">
              The right answers the first time
            </h2>
            <div className="text-lg">
              Effective treatment depends on getting the right diagnosis. Our
              experts diagnose and treat the toughest medical challenges.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold">
              No. 1 hospital in the U.S.
            </div>
            <div className="pb-10 text-lg">
              Mayo Clinic is the top hospital in the U.S. News & World Report
              rankings.{" "}
              <span className="text-blue-700 text-lg cursor-pointer border-b-2 border-blue-700">
                Learn more about our top-ranked specialties.
              </span>
            </div>
            <div className="flex flex-row gap-4 justify-start items-center cursor-pointer text-blue-700">
              <Icon icon="fluent-mdl2:contact-heart" fontSize={25} />
              <div className="flex justify-start items-center gap-3">
                <div className="text-xl hover:border-b-2 border-blue-700">
                  Why choose Mayo Clinic{" "}
                </div>
                <Icon
                  icon="material-symbols:keyboard-arrow-right"
                  fontSize={25}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-white w-full">
          <img src={Img1} alt="" className="w-[95%] avg:w-[80%] h-[90%]  rounded-3xl" />
        </div>
      </div>

      <div className="grid grid-rows-2 xsm:grid-rows-1 xsm:grid-cols-2 grid-flow-col min-h-[700px]">
        <div className="flex flex-col bg-white justify-center items-center px-4 avg:px-32 xsm:order-last">
          <h1 className="text-4xl font-semibold font-mono">
            Healing starts here
          </h1>
          <div className="py-3">
            <h2 className="text-lg font-semibold">
              World-class care for global patients
            </h2>
            <div className="text-lg">
              We make it easy for patients around the world to get care from
              Mayo Clinic.
            </div>
          </div>
          <div className="w-full flex flex-row gap-4 justify-start items-center cursor-pointer text-blue-700">
            <Icon
              icon="streamline:travel-map-globe-model-planet-earth-globe-world"
              fontSize={25}
            />
            <div className="flex justify-start items-center gap-3">
              <div className="text-xl hover:border-b-2 border-blue-700">
                International services{" "}
              </div>
              <Icon
                icon="material-symbols:keyboard-arrow-right"
                fontSize={25}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center bg-white w-full">
          <img src={Img2} alt="" className="w-[95%] avg:w-[80%] h-[90%]  rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Services;
