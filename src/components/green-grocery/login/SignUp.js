import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from '../../../hooks/useModal';

import { authActions } from '../../../store/slices/auth';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';

const SignUp = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();
  const disptach = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.auth.users);
  const [userAccountAlreadyExists, setUserAccountAlreadyExists] = useState(false);

  const submitRegisterHandler = (e) => {
    e.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredRepeatedPassword = repeatedPasswordRef.current.value;

    const userSingUpData = { username: enteredUsername, password: enteredPassword };

    const usernameValidity = enteredUsername.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const passwordMin6Chars = enteredPassword.length >= 6;
    const passwordMatchesNumber = enteredPassword.match(/[0-9]/g);

    const userAccountAlreadyExistsHandler = users.find(({ username }) => username === enteredUsername);
    if (userAccountAlreadyExistsHandler) {
      setUserAccountAlreadyExists(true);
    }

    if (!usernameValidity) {
      alert('You have entered an invalid email address');
    } else if (enteredPassword !== enteredRepeatedPassword) {
      alert('Repeated password is not the same');
    } else if (!passwordMin6Chars) {
      alert('Password must be at least 6 characters long');
    } else if (!passwordMatchesNumber) {
      alert('Password must contain a number');
    } else {
      disptach(authActions.signUp(userSingUpData));
      openModalHandler();
    }
  };

  const { showModal, openModal: openModalHandler, closeModal: closeModalHandler } = useModal();

  const openSignInPageHandler = () => {
    history.push('/green-grocery/login');
  };

  const createdAccountMessage = 'Congratulations, your account has been successfully created!';
  const enteredEmailExistsMessage = 'This email address already exists in the database. Please sing in.';

  const messageContent = (
    <div>
      <p className='text-center m-5 fs-4 lh-base text-break'>
        {userAccountAlreadyExists ? enteredEmailExistsMessage : createdAccountMessage}
      </p>
      <div className='text-center mb-4'>
        <Button className='btn-outline-success btn-lg' onClick={openSignInPageHandler}>
          Continue
        </Button>
      </div>
    </div>
  );

  return (
    <div className='row justify-content-md-center'>
      <Card additionalClasses='col-md-10'>
        <h5 className='m-3'>Sign up</h5>
        <hr />
        <form>
          <Input id='loginEmail' labelText='E-mail' type='email' ref={usernameRef}></Input>
          <Input id='loginPassword' labelText='Password' type='password' ref={passwordRef}></Input>
          <Input id='loginPasswordRepeat' labelText='Repeat password' type='password' ref={repeatedPasswordRef}></Input>
          <div className='d-flex justify-content-end'>
            <Button type='submit' onClick={submitRegisterHandler}>
              Sign up
            </Button>
          </div>
        </form>
      </Card>
      <Modal
        show={showModal}
        onClose={closeModalHandler}
        header={<h3>{userAccountAlreadyExists ? 'Oops!' : 'Succes!'}</h3>}
      >
        {messageContent}
      </Modal>
    </div>
  );
};

export default SignUp;
