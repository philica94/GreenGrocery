import Product from './products/Product';
import { useSelector } from 'react-redux';

const Shop = () => {
  const fruitProducts = useSelector((state) => state.cart.products);
  const fruitList = fruitProducts.map((fruitProd) => <Product key={fruitProd.id} {...fruitProd} />);

  return <div className='row text-center'>{fruitList}</div>;
};

export default Shop;
