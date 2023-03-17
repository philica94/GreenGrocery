import { useState, useEffect } from 'react';
const DEFAULT_SETTINGS = { openInitially: false };

export const useModal = ({ openInitially, afterOpening, afterClosing } = DEFAULT_SETTINGS) => {
  // const isRendered = useRef(true);
  const [showModal, setShowModal] = useState(openInitially);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    // this is not working in strict mode as useEffect is fired two times
    // if (isRendered.current) {
    //   isRendered.current = false;
    //   return;
    // }
    showModal ? afterOpening?.() : afterClosing?.();
  }, [showModal]);

  return {
    showModal,
    openModal,
    closeModal,
  };
};
