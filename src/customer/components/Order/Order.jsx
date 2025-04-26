import { Grid } from '@mui/material';
import React from 'react';
import OrderCard from './OrderCard'; // Update the path if needed

const orderStatus = [
  { lable: "On the Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];

const orders = [
  {
    image: 'https://example.com/jeans.jpg',
    name: 'Men Slim Mid Rise Black Jeans',
    size: 'M',
    price: 1099,
    status: 'Delivered',
    deliveryDate: 'Mar 03',
  },
  {
    image: 'https://example.com/yellow-dress.jpg',
    name: 'Women Bodycon Yellow Dress',
    size: 'M',
    price: 499,
    status: 'Delivered',
    deliveryDate: 'Mar 03',
  },
];

const Order = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Grid container spacing={4}>
        {/* Left filter panel */}
        <Grid item xs={12} md={3}>
          <div className="bg-white shadow-md rounded-md p-5 sticky top-5">
            <h2 className="font-bold text-lg mb-6">Filters</h2>
            <div className="space-y-4">
              <h3 className="font-semibold">ORDER STATUS</h3>
              {orderStatus.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={option.value}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label className="text-sm text-gray-600" htmlFor={option.value}>
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/* Right order list */}
        <Grid item xs={12} md={9}>
          <div className="space-y-5 w-250">
            {orders.map((order, index) => (
              <OrderCard
                key={index}
                image={order.image}
                name={order.name}
                size={order.size}
                price={order.price}
                status={order.status}
                deliveryDate={order.deliveryDate}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
