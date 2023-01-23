const Card = (props) => {
  return (
    <div className='card m-2' style={{ width: '20rem' }}>
      <div className='card-body'>{props.children}</div>
    </div>
  );
};

export default Card;
