import ReactDOM from 'react-dom';
import Button from './Button';

const Modal = ({ children, show, onClose, header, footer }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const footerContent = footer && (
    <div className='modal-footer'>
      {footer.additionalContent ? footer.additionalContent : ''}
      <Button onClick={footer.onCancelClick} className='btn-secondary'>
        {footer.cancelButtonText}
      </Button>
      <Button onClick={footer.onOkClick}>{footer.okButtonText}</Button>
    </div>
  );

  return (
    show &&
    ReactDOM.createPortal(
      <>
        <div className='modal fade d-block show' tabIndex={-1} onClick={handleModalClick}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                {header}
                <button className='btn-close' onClick={onClose}></button>
              </div>
              <div className='modal-body'>{children}</div>
              {footerContent}
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
