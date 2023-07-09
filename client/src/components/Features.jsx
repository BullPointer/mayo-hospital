import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <div className="bg-white grid grid-cols-1 xsm:grid-cols-2 avg:grid-cols-3 pt-5 w-full h-auto avg:h-[450px]">
      <div className="flex flex-col gap-3 pl-4 avg:pl-8 pr-8 pt-8  xsm:col-span-3 avg:col-span-1">
        <h1 className="text-4xl font-bold opacity-95">Featured care areas</h1>
        <h2 className="font-medium text-lg">
          We solve the {"world's"} most serious and complex medical challenges.
        </h2>
      </div>
      <div className="pt-8 px-4">
        {[
          "Bone marrow transplant",
          "Brain tumor",
          "Colon cancer",
          "Glioma",
          "Heart valve disease",
          "Lung transplant",
          "Testicular cancer",
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center border-t py-3 last:border-b cursor-pointer"
          >
            <div className="text-lg font-medium text-blue-800 hover:border-b-2 border-blue-800">
              {item}
            </div>
            <Icon
              className="text-blue-800"
              icon="ep:arrow-right-bold"
              fontSize={15}
            />
          </div>
        ))}
      </div>
      <div className="pt-0 pb-10 xsm:pb-0 xsm:pt-8 px-4">
        {[
          "Brain aneurysm",
          "Breast cancer",
          "Congenital heart disease",
          "Heart arrhythmia",
          "Living-donor transplant",
          "Sarcoma",
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center first:border-t-0 xsm:first:border-t border-t py-3 last:border-b cursor-pointer"
          >
            <div className="text-lg font-medium text-blue-800 hover:border-b-2 border-blue-800">
              {item}
            </div>
            <Icon
              className="text-blue-800"
              icon="ep:arrow-right-bold"
              fontSize={15}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
