import { useSelector } from 'react-redux';

import { Star, StarFill } from 'react-bootstrap-icons';
import { useModal } from '../../../../hooks/useModal';
import Modal from '../../../UI/Modal';
import Button from '../../../UI/Button';

const Favourites = () => {
  const favouriteId = useSelector((state) => state.favourite.id);
  const products = useSelector((state) => state.cart.products);
  const { showModal, openModal: openModalHandler, closeModal: closeModalHandler } = useModal();

  const favouriteListData = favouriteId.map((favId) => products.find((prod) => prod.id === favId));
  const favouriteList = favouriteListData.map(({ name, image }) => {
    return (
      <div className='d-flex mb-4'>
        <span>{image}</span>
        <h4>{name}</h4>
        <div className='input-group'>{/* <Button onClick={addOneQuantityProductHandler}>Add to Cart</Button> */}</div>
      </div>
    );
  });

  const emptyFavourites = <h5 className='d-flex justify-content-center m-5'>You have no favourites yes</h5>;

  const starIcon = favouriteListData.length === 0 ? <Star size={15} /> : <StarFill size={15} />;

  return (
    <>
      <div className='navbar-brand d-flex' onClick={openModalHandler} role='button'>
        <span>Favourites</span>
        <span className='ms-2'>{starIcon}</span>
      </div>
      <Modal show={showModal} onClose={closeModalHandler} header={<h3>Favourites</h3>}>
        {favouriteList.length === 0 ? emptyFavourites : favouriteList}
      </Modal>
    </>
  );
};

export default Favourites;
