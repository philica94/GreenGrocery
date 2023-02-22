import Card from '../../../UI/Card';
import ProductForm from './ProductForm';
import ProductInfo from './ProductInfo';
import classes from './Product.module.css';

const Product = (prod) => {
  return (
    <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
      <Card additionalClasses={classes.cardFavourite}>
        <ProductInfo {...prod} favouriteClass={classes.hiddenChild} />
        <ProductForm id={prod.id} />
      </Card>
    </div>
  );
};

export default Product;
