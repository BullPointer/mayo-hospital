import Img1 from "../assets/google_store.png";
import Img2 from "../assets/app_store.png";
import { BoxFunc, FollowMeFunc, FooterList } from "./FooterReusables";

const TopFooter = () => {
  return (
    <div className="bg-[#11347e] w-full">
      <div className="grid grid-cols-1 xsm:grid-cols-2 avg:grid-cols-3 border-b-2 px-10 w-full">
        <div className="">
          <div className="flex flex-col gap-2 py-4">
            <BoxFunc />
          </div>
          <FooterList title={"About Mayo Clinic"} name={"aboutMayoClinic"} />
        </div>
        <div className="flex flex-col gap-2 py-4">
          <FooterList
            title={"Medical Professionals"}
            name={"medicalProfessionals"}
          />
          <FooterList title={"Businesses"} name={"businesses"} />
          <FooterList title={"Students"} name={"students"} />
        </div>
        <div className="flex flex-col gap-2 py-4">
          <FooterList title={"Researchers"} name={"researchers"} />
          <FooterList
            title={"International Patients"}
            name={"internationalPatients"}
          />
          <FooterList
            title={"Charitable Care & Financial Assistance"}
            name={"charitableCareAndFinancialAssistance"}
          />
        </div>
      </div>
      <div className="flex flex-col xsm:flex-row justify-between items-start py-5 mx-10">
        <div className="flex flex-col items-start">
          <h1 className="text-white">Follow Mayo Clinic</h1>
          <div className="flex flex-row gap-4 p-2">
            <FollowMeFunc link={"teenyicons:twitter-solid"} />
            <FollowMeFunc link={"bi:youtube"} />
            <FollowMeFunc link={"ri:facebook-fill"} />
            <FollowMeFunc link={"bi:linkedin"} />
            <FollowMeFunc link={"teenyicons:instagram-solid"} />
          </div>
        </div>
        <div className="flex flex-col items-start xsm:items-end avg:items-start w-auto  xsm:w-[500px]">
          <h1 className="text-white text-lg avg:text-xl font-bold pr-3 avg:pr-40 ">
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
  );
};

export default TopFooter;
