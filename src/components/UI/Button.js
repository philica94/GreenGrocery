const Button = (props) => {
  const type = props.type || 'button';
  const className = props.className || 'btn-outline-primary';

  return (
    <button type={type} className={`btn ${className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
