const InvalidMessage = ({ message }) => {
  return (
    <div className='text-bg-danger p-1 ps-3'>
      <span className='text-light fw-semibold'>{message}</span>
    </div>
  );
};

export default InvalidMessage;
