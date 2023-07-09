import { Icon } from "@iconify/react";
import Img1 from "../assets/location_images/one.jpg";
import Img2 from "../assets/location_images/two.jpg";
import Img3 from "../assets/location_images/three.jpg";
import Img4 from "../assets/location_images/four.jpg";
import Img5 from "../assets/location_images/five.jpg";

const data = [
  {
    img: Img1,
    hospital: "Mayo Clinic in Arizona",
    location: "Phoenix & Scottsdale",
  },
  {
    img: Img2,
    hospital: "Mayo Clinic in Florida",
    location: "Jacksonville",
  },
  {
    img: Img3,
    hospital: "Mayo Clinic in Minnesota",
    location: "Rochester",
  },
  {
    img: Img4,
    hospital: "Mayo Clinic Health System",
    location: "Iowa, Minnesota, Wisconsin",
  },
  {
    img: Img5,
    hospital: "Mayo Clinic Healthcare",
    location: "London, United Kingdom",
  },
];
const Location = () => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 avg:grid-cols-3 bg-white px-2">
      <div className="flex flex-col gap-4 justify-center items-start h-[310px] m-5 px-2 rounded-xl">
        <h1 className="text-4xl font-bold">Locations</h1>
        <h2 className="text-lg">
          Learn more about Mayo Clinic locations or choose a specific location.
        </h2>
        <div className="flex flex-row justify-center items-end cursor-pointer">
          <Icon
            className="text-blue-500"
            icon="basil:location-outline"
            fontSize={25}
          />
          <div className="flex flex-row justify-center items-center">
            <div className="text-blue-500 text-lg hover:border-b-2 border-blue-500">
              Explore all locations
            </div>
            <Icon
              className="text-blue-500"
              icon="ep:arrow-right-bold"
              fontSize={15}
            />
          </div>
        </div>
      </div>
      {data?.map(({ img, hospital, location }, index) => (
        <div key={index} className="bg-black h-[310px] m-5 rounded-xl relative">
          <img
            className="w-[100%] h-[100%] rounded-xl opacity-70"
            src={img}
            target="_blank"
            rel="noopener noreferrer"
            alt="image"
          />
          <div className="absolute top-[70%] left-6">
            <div className="flex flex-row justify-center items-center cursor-pointer">
              <h1 className="text-white text-2xl font-bold hover:border-b-4 border-white">
                {hospital}
              </h1>
              <Icon
                className="text-white"
                icon="ep:arrow-right-bold"
                fontSize={15}
              />
            </div>
            <div className="text-white text-lg font-medium">{location}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Location;
