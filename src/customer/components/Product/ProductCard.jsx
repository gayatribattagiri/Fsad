import React from 'react';
import './ProductCard.css';
import { useNavigate, useParams } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const handleClick = () => {
    navigate(`/product/${categoryId}/${product.id}`);
  };

  return (
    <div
  onClick={handleClick}
  className='productCard 
            w-[30%] sm:w-[30%] md:w-[19%] lg:w-[18%] 
            m-[1%] sm:m-[1%] md:m-2 lg:m-2
            transition-all cursor-pointer rounded-lg overflow-hidden'
>
  {/* Image Part */}
  <div className='h-[4rem] sm:h-[4rem] md:h-[6.5rem] lg:h-[8rem]'>
    <img
      className='h-full w-full object-cover object-center'
      src={product.image}
      alt={product.description}
    />
  </div>

  {/* Text Part */}
  <div className='textPart bg-white p-[2px] sm:p-1 md:p-2 lg:p-2'>
    <div>
      <p className='font-bold opacity-60 
                    text-[0.45rem] sm:text-[0.5rem] md:text-[0.65rem] lg:text-[0.75rem]'>
        {product.name}
      </p>
      <p className='text-[0.35rem] sm:text-[0.4rem] md:text-[0.5rem] lg:text-[0.6rem]'>
        {product.description || ''}
      </p>
    </div>
    <div className='flex items-center 
                    space-x-[1px] sm:space-x-[2px] md:space-x-1 lg:space-x-2 
                    mt-[2px] sm:mt-[4px] md:mt-1 
                    text-[0.4rem] sm:text-[0.5rem] md:text-[0.6rem] lg:text-[0.7rem]'>
      <p className='font-semibold'>
        ₹{product.price.toLocaleString('en-IN')}
      </p>
      {product.originalPrice && (
        <>
          <p className='line-through opacity-50'>{product.originalPrice}</p>
          <p className='text-green-600 font-semibold'>
            {product.discount || '70% off'}
          </p>
        </>
      )}
    </div>
  </div>
</div>
  );
};

export default ProductCard;
