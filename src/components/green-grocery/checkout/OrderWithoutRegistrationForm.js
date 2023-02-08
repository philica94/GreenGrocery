import Input from '../../UI/Input';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const OrderWithoutRegistrationForm = () => {
  return (
    <Card>
      <h5 className='m-3'>Order without registration</h5>
      <hr />
      <form>
        <Input inputId='nameAndSurnameInput' labelText='Name and Surname' />
        <Input inputId='emailAddress' labelText='E-mail' />
        <Input inputId='deliveryCity' labelText='City' />
        <Input inputId='deliveryStreet' labelText='Address' />
        <Input inputId='telNumber' labelText='Telephone' type='tel' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' />
        <div className='d-flex justify-content-end pt-3'>
          <Button type='submit'>Order</Button>
        </div>
      </form>
    </Card>
  );
};

export default OrderWithoutRegistrationForm;
