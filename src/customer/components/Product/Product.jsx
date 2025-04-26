import { useParams } from 'react-router-dom';
import farmfreshdata from '../../../Data/farmfresh';
import dailyneedsdata from '../../../Data/dailyneeds';
import ProductCard from './ProductCard';
import electronicsdata from '../../../Data/electronics'
import cosmetics from '../../../Data/cosmetics'
import decoratives from '../../../Data/decoratives'
import cleaners from '../../../Data/cleaners';

const productDataMap = {
  farmfresh: farmfreshdata,
  dailyneeds: dailyneedsdata,
  electronics: electronicsdata,
  cosmetics:cosmetics,
  decoratives:decoratives,
  cleaners:cleaners,
  // add more categories here
};

export default function Product() {
  const { categoryId } = useParams();
  const categoryData = productDataMap[categoryId] || [];

  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {`Fresh ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`}
      </h2>
      <div className="flex flex-wrap justify-center">
        {categoryData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
