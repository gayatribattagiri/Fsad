import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ image, name, size, price, status, deliveryDate }) => {
    const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="grid grid-cols-[100px_1fr_200px] gap-4 items-center">
        {/* Image */}
        <div className="w-full h-24 overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600 text-sm">Size: {size}</p>
          <p className="text-lg font-medium mt-1">₹{price}</p>
        </div>

        {/* Delivery Info */}
        <div className="text-sm text-right">
          <p className="text-green-600 font-medium">✔ {status}</p>
          <p className="text-gray-500">Expected Delivery On {deliveryDate}</p>
          <p className="text-gray-500">Your Item Has Been Delivered</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
