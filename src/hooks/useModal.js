import { useState, useEffect } from 'react';
const DEFAULT_SETTINGS = { openInitially: false };

export const useModal = ({ openInitially, afterOpening } = DEFAULT_SETTINGS) => {
  const [showModal, setShowModal] = useState(openInitially);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    showModal && afterOpening?.();
  }, [showModal]);

  return {
    showModal,
    openModal,
    closeModal,
  };
};
