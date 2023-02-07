import Product from './products/Product';
import { FRUIT_PRODUCTS, VEGETABLE_PRODUCTS } from '../../../data/productsData';

const Shop = () => {
  const fruitList = FRUIT_PRODUCTS.map((fruitProd) => <Product key={fruitProd.id} {...fruitProd} />);

  return (
    <div className='container text-center'>
      <div className='row'>{fruitList}</div>
    </div>
  );
};

export default Shop;
