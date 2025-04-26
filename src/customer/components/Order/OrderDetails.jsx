import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid, Button } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

const productList = [
  {
    name: "Men Slim Mid Rise Black Jeans",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10444889/2019/9/17/ab5ed48e-91d6-44f1-88b4-1c0edb10cb851568708764097-HERENOW-Men-Jeans-3121568708762464-1.jpg",
    color: "pink",
    size: "M",
    seller: "linaria",
    price: 1099,
  },
  {
    name: "Women Bodycon Yellow Dress",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15518860/2021/10/8/40e91ed4-3946-4a0f-91cf-b2c00aa8ba3a1633688323004-Harpa-Women-Yellow-Solid-Bodycon-Dress-5941633688322581-1.jpg",
    color: "pink",
    size: "M",
    seller: "FALTOOO FASHION",
    price: 499,
  },
  {
    name: "Women Skater Yellow Dress",
    image: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10709862/2019/10/4/245e63e6-1bc9-474c-80f6-f171e937bb991570173694225-AD-LILA-Women-Yellow-Solid-Fit-and-Flare-Dress-4891570173692874-1.jpg",
    color: "pink",
    size: "M",
    seller: "Tokyo Talkies",
    price: 1099,
  }
]

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
      {/* Address Section */}
      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className='py-10'>
        <OrderTracker activeStep={2} />
      </div>

      {/* Product Cards */}
      <Grid container direction="column" spacing={3}>
        {productList.map((product, index) => (
          <Grid key={index} item>
            <Grid container className='shadow-md rounded-md p-5 border' alignItems="center" justifyContent="space-between">
              {/* Product Image */}
              <Grid item xs={2}>
                <img src={product.image} alt={product.name} className='w-full h-[100px] object-cover rounded-md' />
              </Grid>

              {/* Product Info */}
              <Grid item xs={6}>
                <div className='space-y-1'>
                  <h1 className='font-semibold'>{product.name}</h1>
                  <p className='text-sm text-gray-600'>Color: {product.color} &nbsp; Size: {product.size}</p>
                  <p className='text-sm text-gray-600'>Seller: {product.seller}</p>
                  <p className='font-semibold text-gray-800'>₹{product.price}</p>
                </div>
              </Grid>

              {/* Action Button */}
              <Grid item xs={3} className='text-right'>
                <Button variant='text' startIcon={<StarIcon />} sx={{ color: "#9155FD", fontWeight: 600 }}>
                  Rate & Review Product
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default OrderDetails
