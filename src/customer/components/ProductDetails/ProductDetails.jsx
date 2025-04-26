import { useParams, useNavigate } from 'react-router-dom';
import farmfresh from '../../../Data/farmfresh';

import ProductReviewCard from './ProductReviewCard';
import { StarIcon } from '@heroicons/react/20/solid';
import { useCart } from '../context/CartContext';
import cosmetics from '../../../Data/cosmetics';
import electronics from '../../../Data/electronics';
import decoratives from '../../../Data/decoratives';
import cleaners from '../../../Data/cleaners';
import dailyneeds from '../../../Data/dailyneeds';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductDetails() {
  const { category, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const dataMap = {
    farmfresh,
    dailyneeds,
    cosmetics,
    electronics,
    decoratives,
    cleaners,
  };

  const products = dataMap[category] || [];
  const product = products.find((item) => item.id === parseInt(productId));

  if (!product) {
    return <div className="p-8 text-red-500">Product not found</div>;
  }

  const reviews = { href: '#', average: 4, totalCount: 23 };

  const handleAddtoCart = () => {
    addToCart({ ...product, category }); // ✅ Add category to product
    navigate('/cart');
  };

  const formatPrice = (price) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div className="flex items-center">
                <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </a>
              </div>
            </li>
            <li className="text-sm">
              <span className="font-medium text-gray-500">{product.name}</span>
            </li>
          </ol>
        </nav>

        {/* Layout */}
        <section className="grid grid-cols lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                alt={product.name}
                src={product.image}
                className="size-full rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900">{formatPrice(product.price)}</p>
              <p className="text-sm text-gray-500 line-through">{formatPrice(product.originalPrice)}</p>
              <p className="text-sm text-green-600">{product.discount}</p>

              {/* Reviews */}
              <div className="mt-6">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'size-5 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddtoCart}
                type="button"
                className="mt-10 flex w-full justify-center rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Add to bag
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8">
              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>
          </div>
        </section>
        <ProductReviewCard />
      </div>
    </div>
  );
}
