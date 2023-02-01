const Button = (props) => {
  return (
    <button className='btn btn-outline-primary' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
