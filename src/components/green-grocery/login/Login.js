import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authActions } from '../../../store/slices/auth';

import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';

const Login = ({ headerContent, pathTo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const usersData = useSelector((state) => state.auth.users);

  const submitLoginHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const userLoginData = { username: enteredUsername, password: enteredPassword };

    const existingUserIndex = usersData.findIndex(({ username }) => username === userLoginData.username);
    const successfullyEnteredLoginData = usersData[existingUserIndex]?.password === userLoginData.password;

    if (usersData[existingUserIndex]?.username !== userLoginData.username) {
      alert('You have entered an invalid email address');
    } else if (!successfullyEnteredLoginData) {
      alert('Your password is invalid, please try again');
    } else if (successfullyEnteredLoginData) {
      dispatch(authActions.login(userLoginData));
    }
  };

  useEffect(() => {
    if (userLoggedIn) {
      history.push(pathTo);
    }
  }, [userLoggedIn]);

  return (
    <div className='row justify-content-md-center'>
      <Card additionalClasses='col-md-10'>
        <h5 className='m-3'>{headerContent}</h5>
        <hr />
        <form>
          <Input id='loginEmail' labelText='E-mail' type='email' ref={usernameRef}></Input>
          <Input id='loginPassword' labelText='Password' type='password' ref={passwordRef}></Input>
          <div className='d-flex justify-content-between'>
            <div></div>
            <Link to='/green-grocery/sign-up'>create an account</Link>
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
