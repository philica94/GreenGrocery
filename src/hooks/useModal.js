import { useState } from 'react';

export const useModal = (openInitially = false) => {
  const [showModal, setShowModal] = useState(openInitially);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return {
    showModal,
    openModal,
    closeModal,
  };
};
