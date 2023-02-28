import React from 'react';

const Input = React.forwardRef(({ id, labelText, wrapperClassName = 'mb-3', ...attributes }, ref) => {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input type={attributes.type || 'text'} className='form-control' id={id} {...attributes} ref={ref} />
    </div>
  );
});

export default Input;
