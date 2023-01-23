const Button = (props) => {
  return (
    <button type='button' className='btn btn-outline-primary'>
      {props.children}
    </button>
  );
};

export default Button;
