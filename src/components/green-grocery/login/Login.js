import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../../store/slices/auth';

import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';

const Login = ({ headerContent, pathTo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitLoginHandler = (e) => {
    dispatch(authActions.login());
    history.push(pathTo);
  };

  return (
    <div className='row justify-content-md-center'>
      <Card additionalClasses='col-md-6'>
        <h5 className='m-3'>{headerContent}</h5>
        <hr />
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
    </div>
  );
};

export default Login;
