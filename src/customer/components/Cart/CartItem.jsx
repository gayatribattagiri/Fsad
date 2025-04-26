import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = item.quantity - 1;
    if (newQuantity > 0) {
      updateQuantity(item, newQuantity);
    } else {
      removeFromCart(item);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item, item.quantity + 1);
  };

  return (
    <div className="p-3 shadow-md border rounded-md bg-white">
      <div className="flex items-center">
        {/* Product Image */}
        <div className="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.image}
            alt={item.name}
          />
        </div>

        {/* Product Info */}
        <div className="ml-4 flex-1 space-y-1">
          <p className="font-medium text-sm">{item.name}</p>
          <p className="opacity-70 text-xs">{item.description}</p>

          <div className="flex space-x-4 items-center text-base text-gray-900 pt-2">
            <p className="font-semibold">₹{item.price}</p>
            <p className="opacity-50 line-through text-sm">₹{item.originalPrice}</p>
            <p className="text-green-600 font-semibold text-sm">{item.discount}</p>
          </div>

          {/* Quantity & Remove */}
          <div className="flex items-center space-x-3 pt-2">
            <div className="flex items-center border px-1 py-0.5 rounded-md space-x-2">
              <button
                onClick={handleDecrease}
                className="text-base text-gray-600 hover:text-black"
              >
                −
              </button>
              <span className="min-w-[1rem] text-center text-sm">{item.quantity}</span>
              <button
                onClick={handleIncrease}
                className="text-base text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="text-xs text-purple-600 font-medium hover:underline"
            >
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
