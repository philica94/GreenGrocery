import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../../store';

import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitLoginHandler = (e) => {
    dispatch(authActions.login());
    history.push('/green-grocery');
  };

  return (
    <Card>
      <form>
        <Input id='loginEmail' labelText='E-mail' type='email'></Input>
        <Input id='loginPassword' labelText='Password' type='password'></Input>
        <div className='d-flex justify-content-end'>
          <Button type='submit' onClick={submitLoginHandler}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
