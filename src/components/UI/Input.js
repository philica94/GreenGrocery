const Input = ({ id, labelText, wrapperClassName = 'mb-3', ...attributes }) => {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className='form-label'>
        {labelText}
      </label>
      <input type={attributes.type || 'text'} className='form-control' id={id} {...attributes} />
    </div>
  );
};

export default Input;
