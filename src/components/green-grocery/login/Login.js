import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authActions } from '../../../store/slices/auth';

import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import InvalidMessage from '../../UI/InvalidMessage';

const Login = ({ headerContent, pathTo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const usernameRef = useRef();
  const passwordRef = useRef();

  const userLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const usersData = useSelector((state) => state.auth.users);
  const [showInvalidEmailMessage, setShowInvalidEmailMessage] = useState(false);
  const [showInvalidPasswordMessage, setShowInvalidPasswordMessage] = useState(false);

  const submitLoginHandler = (e) => {
    e.preventDefault();
    setShowInvalidEmailMessage(false);
    setShowInvalidPasswordMessage(false);
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const userLoginData = { username: enteredUsername, password: enteredPassword };

    const existingUserIndex = usersData.findIndex(({ username }) => username === userLoginData.username);
    const successfullyEnteredLoginData = usersData[existingUserIndex]?.password === userLoginData.password;

    if (existingUserIndex === -1) {
      return setShowInvalidEmailMessage(true);
    }
    if (!successfullyEnteredLoginData) {
      return setShowInvalidPasswordMessage(true);
    }
    dispatch(authActions.login(userLoginData));
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
          <Input id='loginEmail' labelText='E-mail' type='email' ref={usernameRef} autoFocus></Input>
          {showInvalidEmailMessage && <InvalidMessage message={'You have entered an invalid email address'} />}
          <Input id='loginPassword' labelText='Password' type='password' ref={passwordRef}></Input>
          {showInvalidPasswordMessage && <InvalidMessage message={'Your password is invalid, please try again'} />}
          <div className='d-flex justify-content-between mt-3'>
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
