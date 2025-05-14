import React, { useState } from 'react';
import AddressCard from '../Address/AddressCard';
import CartItem from '../Cart/CartItem';
import { useCart } from '../context/CartContext'; // Import cart context

const OrderSummary = () => {
  const { cartItems } = useCart(); // Get the cart items
  const [cashOnDelivery, setCashOnDelivery] = useState(false); // State for COD checkbox

  const handlePayment = () => {
    if (cashOnDelivery) {
      alert("Order confirmed successfully!");
    } else {
      alert("Please select a payment method (Cash on Delivery).");
    }
  };

  return (
    <div>
      <AddressCard />

      <div className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-5">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={`${item.category}-${item.id}`} item={item} />
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Price Summary Section */}
        <div className="bg-white shadow-lg rounded-md p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">PRICE DETAILS</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Price ({cartItems.length} items)</span>
              <span className="font-medium text-blue-600">
                ₹{cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">
                -₹{cartItems.reduce((total, item) => total + Number(item.originalPrice - item.price) * item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Charges</span>
              <span className="text-green-600">Free</span>
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold text-base">
            <span>Total Amount</span>
            <span>
              ₹{cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)}
            </span>
          </div>

          {/* Cash on Delivery Checkbox */}
          <div className="mt-6 flex items-center space-x-2">
            <input
              type="checkbox"
              id="cod"
              checked={cashOnDelivery}
              onChange={(e) => setCashOnDelivery(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="cod" className="text-sm">Cash on Delivery</label>
          </div>

          {/* Payment Button */}
          <button
            onClick={handlePayment}
            className="mt-4 w-full py-3 text-center text-lg font-semibold bg-gradient-to-r from-[#7fb0d6] to-[#d4e5f2] text-gray-800 rounded-lg hover:from-[#6aa1c8] hover:to-[#c0d9ea] shadow-md"
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
