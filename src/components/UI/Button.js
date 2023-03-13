import React from 'react';

const Button = React.forwardRef((props, ref) => {
  const type = props.type || 'button';
  const className = props.className || 'btn-outline-primary';

  return (
    <button type={type} className={`btn ${className}`} onClick={props.onClick} ref={ref}>
      {props.children}
    </button>
  );
});

export default Button;
