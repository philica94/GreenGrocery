import Card from '../../../UI/Card';
import ProductForm from './ProductForm';
import ProductInfo from './ProductInfo';
import classes from './Product.module.css';

const Product = ({ id, name, price, image }) => {
  return (
    <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
      <Card additionalClasses={classes.cardFavourite}>
        <ProductInfo id={id} name={name} price={price} image={image} favouriteClass={classes.hiddenChild} />
        <ProductForm id={id} name={name} price={price} image={image} />
      </Card>
    </div>
  );
};

export default Product;
