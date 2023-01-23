import { useState, useRef } from 'react';

import Card from '../../UI/Card';
import ProductForm from './ProductForm';

import ProductInfo from './ProductInfo';

const Product = (props) => {
  const [itemNumber, setItemNumber] = useState(1);
  const inputItemRef = useRef();

  const submitAddingHandler = () => {};

  return (
    <li>
      <div class='text-center'>
        <Card>
          <ProductInfo name={props.name} price={props.price} />
          <ProductForm {...props} />
        </Card>
      </div>
    </li>
  );
};

export default Product;
