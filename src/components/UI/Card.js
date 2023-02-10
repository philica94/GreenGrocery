const Card = ({ children, ...attributes }) => {
  return (
    <div className='card m-2' {...attributes}>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;
