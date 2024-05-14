import { useState } from "react";
import { companies } from "./landing_helpers";
import recog from '../assets/recog.png'
import Marquee from "react-fast-marquee";
const Companies = () => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <div className="flex flex-col items-center font-archivo gap-16 my-24">
      <div className="flex flex-col items-center gap-4 px-4">
        <span className="text-[#88DB1B] font-bold text-[20px] leading-5 tracking-wide">
          Exceptional Mentors
        </span>
        <span className="font-medium text-2xl md:text-4xl tracking-wider text-center">
          We have our mentors from top tech companies
        </span>
      </div>
      <div className="w-full px-4 md:px-24">
        <Marquee
          speed={50}
          pauseOnClick
          pauseOnHover
          className="w-full flex items-center"
          direction="right"
        >
          {companies.map((item, index) => (
            <img
              key={`marquee_item_${index}`}
              src={item}
              alt=""
              className={`w-20 h-full mx-14 ${hoveredImageIndex === index ? "grayscale-0" : "grayscale"}`}
              onMouseEnter={() => setHoveredImageIndex(index)}
              onMouseLeave={() => setHoveredImageIndex(null)}
            />
          ))}
        </Marquee>
      </div>
      <div className="bg-white rounded-2xl flex flex-col items-center mx-24 py-8">
          <span className="font-medium text-lg">Recognized by</span>
          <img src={recog} className="mt-6" alt="" />
      </div>
    </div>
  );
};

export default Companies;
