import React, {useState} from 'react';
import phoneImage from '../../assets/Cards/mobile.png';
import phoneImage1 from '../../assets/Cards/mobile1.png';
import design from '../../assets/Cards/DESIGN/2.png'
import develop from '../../assets/Cards/DESIGN/3.png'
import devliver from '../../assets/Cards/DESIGN/4.png'
import { PiTriangleLight } from "react-icons/pi";
import Scroller from './Scroller';
const HeroSection = () => {
  const [img, setImage] = useState(phoneImage1)
  return (
    <div className="flex justify-center items-center bg-white py-48">
      <div className="flex flex-col items-center justify-center w-full  sm:px-16 md:flex-row relative">
      <span className='hidden lg:block'><img src="/forward.png" alt="" className="lg:w-1/3 lg:h-auto" /></span>
        <div className="bg-[#359dad] hidden text-white text-2xl md:flex px-7 font-bold w-44 h-44  md:items-center md:justify-center md:block shadow-lg transform hover:scale-105 hover:cursor-pointer" onClick={() => setImage(design)}>
          DESIGN
        </div>
        <div className="bg-[#4a4a4a] hidden text-white text-2xl font-bold w-44 h-44 md:flex md:items-center md:justify-center md:block shadow-lg transform hover:scale-105 mx-4 px-4 hover:cursor-pointer" onClick={() => setImage(develop)}>
          DEVELOP
        </div>
        <div className="relative transform hover:scale-105" onClick={() => setImage(phoneImage1)}>
          <img 
            src={img}
            alt="Phone1"
            className="w-60 h-auto p-5 my-32"
          />
          <div className="absolute inset-0 flex items-center justify-center md:my-0">
            <img
              src={phoneImage}
              alt="Phone"
              className="w-full h-auto md:h-auto py-11"
            />
            <Scroller className='block md:hidden lg:hidden ' />
          </div>
        </div>
        <div className="bg-[#34dd64] text-white hidden text-2xl font-bold w-44 h-44  ml-3 mr-20 md:flex md:block md:items-center md:justify-center shadow-lg transform hover:scale-105 px-5  hover:cursor-pointer" onClick={() => setImage(devliver)}>
          DELIVER
        </div>
        <span className='ml-10 hidden lg:block'>
          <img src="/forward.png" alt="" className="w-1/3 h-auto" /></span>
      </div>
    </div>
  );
};

export default HeroSection;
