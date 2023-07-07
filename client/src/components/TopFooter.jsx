import { Icon } from "@iconify/react";
import Img1 from "../assets/google_store.png";
import Img2 from "../assets/app_store.png";
import footerData from "../utils/footerData";

const TopFooter = () => {
    return (
        <div className="bg-[#11347e] w-full py-5">
        <div className="grid grid-cols-3 mx-10 border-b-2">
          <div className="">
            <div className="flex flex-col gap-2 py-4">
              <div className="w-[80%] flex flex-row justify-between items-center p-4 hover:border-2 rounded-xl border cursor-pointer">
                <div className="flex flex-row items-center p-2 gap-4">
                  <Icon
                    className="text-white"
                    icon="fa-solid:stethoscope"
                    fontSize={25}
                  />
                  <div className="text-white text-[14px]">Find a doctor</div>
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-white"
                    icon="ep:arrow-right-bold"
                    fontSize={16}
                  />
                </div>
              </div>
              <div className="w-[80%] flex flex-row justify-between items-center p-4 hover:border-2 rounded-xl border cursor-pointer">
                <div className="flex flex-row items-center p-2 gap-4">
                  <Icon className="text-white" icon="uit:bag" fontSize={25} />
                  <div className="text-white text-[14px]">Explore careers</div>
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-white"
                    icon="ep:arrow-right-bold"
                    fontSize={16}
                  />
                </div>
              </div>
              <div className="w-[80%] flex flex-row justify-between items-center p-4 hover:border-2 rounded-xl border cursor-pointer">
                <div className="flex flex-row items-center p-2 gap-4">
                  <Icon
                    className="text-white"
                    icon="quill:inbox-newsletter"
                    fontSize={25}
                  />
                  <div className="text-white text-[15px]">
                    Sign up for free e-newsletters
                  </div>
                </div>
                <div>
                  {" "}
                  <Icon
                    className="text-white"
                    icon="ep:arrow-right-bold"
                    fontSize={16}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                About Mayo Clinic
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
  
            {footerData?.aboutMayoClinic.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                Medical Professionals
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.medicalProfessionals.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                Businesses
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.businesses.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                Students
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.students.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2 py-4">
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                Researchers
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.researchers.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                International Patients
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.internationalPatients.map(({ text }, index) => (
              <div
                key={index}
                className="text-white font-normal mb-2  text-[14px] hover:border-b max-w-fit cursor-pointer"
              >
                {text}
              </div>
            ))}
            <div className="flex flex-row justify-start items-center gap-2 py-2">
              <h1 className="flex flex-row items-end justify-start hover:border-b-2 cursor-pointer text-white text-lg font-semibold">
                Charitable Care & Financial Assistance
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={16}
              />
            </div>
            {footerData?.charitableCareAndFinancialAssistance.map(
              ({ text }, index) => (
                <div
                  key={index}
                  className="text-white font-normal  text-[14px] hover:border-b max-w-fit cursor-pointer"
                >
                  {text}
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between items-start py-5 mx-10">
          <div className="flex flex-col items-start">
            <h1 className="text-white">Follow Mayo Clinic</h1>
            <div className="flex flex-row gap-4 p-2">
              <div className="flex justify-center items-center rounded-full border-white border p-2 cursor-pointer hover:border-2">
                <Icon
                  icon="teenyicons:twitter-solid"
                  className="text-white"
                  fontSize={20}
                />
              </div>
              <div className="rounded-full border-white border p-2 cursor-pointer hover:border-2">
                <Icon icon="bi:youtube" className="text-white" fontSize={20} />
              </div>
              <div className="rounded-full border-white border p-2 cursor-pointer hover:border-2">
                <Icon
                  icon="ri:facebook-fill"
                  className="text-white"
                  fontSize={20}
                />
              </div>
              <div className="rounded-full border-white border p-2 cursor-pointer hover:border-2">
                <Icon
                  icon="bi:linkedin"
                  className="text-white rounded"
                  fontSize={20}
                />
              </div>
              <div className="rounded-full border-white border p-2 cursor-pointer hover:border-2">
                <Icon
                  icon="teenyicons:instagram-solid"
                  className="text-white"
                  fontSize={20}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start w-[500px]">
            <h1 className="text-white text-xl font-bold pr-40 ">
              Get the Mayo Clinic app
            </h1>
            <div className="flex flex-row items-start justify-start gap-3">
              <div className="flex items-center w-[100px] h-[100px] cursor-pointer">
                <img src={Img2} alt="" />
              </div>
              <div className="w-[100px] h-[100px] cursor-pointer">
                {" "}
                <img src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default TopFooter;
  