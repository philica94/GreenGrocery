import ReactDOM from 'react-dom';

const Modal = ({ children, show, onClose, header }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    show &&
    ReactDOM.createPortal(
      <>
        <div className='modal fade d-block show' tabIndex={-1} onClick={handleModalClick}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3>{header}</h3>
                <button className='btn-close' onClick={onClose}></button>
              </div>
              <div className='modal-body'>{children}</div>
            </div>
          </div>
        </div>
        <div className='modal-backdrop fade show'></div>
      </>,
      document.getElementById('overlay')
    )
  );
};

export default Modal;
