import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeSectionCard = ({ name, description, image, category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${category}`);
  };

     return (
    <div
      onClick={handleClick}
      className="cursor-pointer flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-2xl overflow-hidden
      w-[6rem] sm:w-[8rem] md:w-[10rem] lg:w-[11rem]
      border border-black transition-transform duration-300 hover:scale-105"
    >
      {/* Image */}
     <div className="w-full h-20 sm:h-10 md:h-18 lg:h-32 overflow-hidden flex items-center justify-center">
  <img
    src={image}
    alt={name}
    className="object-cover w-full h-full"
  />
</div>

      {/* Text */}
      <div className="px-1 pt-1 pb-2 text-center w-full">
        <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 truncate">
          {name}
        </h3>
        <p className="mt-1 text-[9px] sm:text-xs text-gray-500 line-clamp-2 leading-tight">
          {description}
        </p>
      </div>
    </div>
  );
};




export default HomeSectionCard;
