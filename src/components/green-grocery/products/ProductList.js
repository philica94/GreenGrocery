import Product from './Product';
import { FRUIT_PRODUCTS, VEGETABLE_PRODUCTS } from '../../../data/productsData';

const ProductList = () => {
  const fruitList = FRUIT_PRODUCTS.map((fruitProd) => <Product key={fruitProd.id} {...fruitProd} />);

  return (
    <ul>
      <div className='container text-center'>
        <div className='row'>
          <div className='col-2'>{fruitList}</div>
        </div>
      </div>
    </ul>
  );
};

export default ProductList;
