const Card = ({ children, additionalClasses, ...attributes }) => {
  return (
    <div className={`card m-2 ${additionalClasses}`} {...attributes}>
      <div className='card-body'>{children}</div>
    </div>
  );
};

export default Card;
