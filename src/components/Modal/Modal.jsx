import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, alt, onClose }) {
  useEffect(() => {
    const closeModal = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', closeModal);

    return () => window.removeEventListener('keydown', closeModal);
  }, [onClose]);

  const onBackdropClose = event => {
    if (event.target === event.currentTarget) {
      return onClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={onBackdropClose}>
      <div className="Modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
