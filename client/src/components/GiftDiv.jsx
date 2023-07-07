import { Icon } from '@iconify/react';

const GiftDiv = () => {
  return (
    <div className="flex flex-row bg-[#101038] w-full h-[280px]">
      <div className="flex flex-row justify-center items-start py-16 w-[20%]">
        <Icon className='text-white' icon="mdi:hand-heart-outline" fontSize={150} />
      </div>
      <div className="flex flex-col justify-start items-end gap-4 px-2 py-16 flex-1">
        <div className="text-4xl text-white font-semibold">
          Your gift holds great power {"-"} donate today!
        </div>
        <div className="text-white font-semibold">
          Make your tax-deductible gift and be a part of the cutting-edge
          research and care {"that's"} changing medicine.
        </div>
      </div>
      <div className="flex flex-row justify-start items-start py-16 w-[32%]">
        <button className="bg-blue-600 text-white text-lg py-3 px-14 rounded-full">
          Donate
        </button>
      </div>
    </div>
  );
};

export default GiftDiv;
