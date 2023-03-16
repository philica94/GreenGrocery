import React from 'react';

const Button = React.forwardRef(({ className, type, onClick, children, ...rest }, ref) => {
  const buttonType = type || 'button';
  const computedClasses = className || 'btn-outline-primary';

  return (
    <button type={buttonType} className={`btn ${computedClasses}`} onClick={onClick} ref={ref} {...rest}>
      {children}
    </button>
  );
});

export default Button;
