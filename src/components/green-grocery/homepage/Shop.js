import Product from './products/Product';
import { FRUIT_PRODUCTS, VEGETABLE_PRODUCTS } from '../../../data/productsData';

const Shop = () => {
  const fruitList = FRUIT_PRODUCTS.map((fruitProd) => <Product key={fruitProd.id} {...fruitProd} />);

  return <div className='row text-center'>{fruitList}</div>;
};

export default Shop;
