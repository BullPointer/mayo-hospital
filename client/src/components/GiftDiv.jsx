import { Icon } from "@iconify/react";

const GiftDiv = () => {
  return (
    <div className="flex flex-row bg-[#101038] w-full avg:h-[280px] h-auto">
      <div className="flex flex-row justify-center items-start py-16 w-[30%] avg:w-[20%] px-4">
        <Icon
          className="text-white"
          icon="mdi:hand-heart-outline"
          fontSize={150}
        />
      </div>
      <div className="flex avg:flex-row flex-col">
        <div className="flex flex-col justify-end avg:justify-start items-end gap-4 px-4 pt-12 pb-6 avg:py-16 flex-1">
          <div className="w-auto p-3">
            <div className="text-xl xsm:text-4xl text-white font-semibold">
              Your gift holds great power {"-"} donate today!
            </div>
            <div className="text-white font-semibold">
              Make your tax-deductible gift and be a part of the cutting-edge
              research and care {"that's"} changing medicine.
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start items-start pt-2 avg:pb-2 pb-10 avg:py-16 w-[32%] px-4">
          <button className="bg-blue-600 text-white text-lg py-3 px-7 xsm:px-14 rounded-full">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftDiv;
