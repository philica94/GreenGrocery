import Input from '../../UI/Input';
import Card from '../../UI/Card';
import Button from '../../UI/Button';

const OrderWithoutRegistrationForm = () => {
  return (
    <div className='row justify-content-md-center'>
      <Card additionalClasses='col-md-6'>
        <h5 className='m-3'>Order without registration</h5>
        <hr />
        <form>
          <Input id='nameAndSurnameInput' labelText='Name and Surname' />
          <Input id='emailAddress' labelText='E-mail' />
          <Input id='deliveryCity' labelText='City' />
          <Input id='deliveryStreet' labelText='Address' />
          <Input
            id='telNumber'
            labelText='Telephone'
            type='tel'
            pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
            placeholder='e.g. 123-456-789'
          />
          <label htmlFor='message'>Message</label>
          <textarea className='form-control' placeholder='Leave a message here' id='message'></textarea>
          <div className='d-flex justify-content-end pt-3'>
            <Button type='submit'>Order</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default OrderWithoutRegistrationForm;
