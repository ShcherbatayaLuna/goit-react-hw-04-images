import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ largeImageURL, webformatURL, alt }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <li className="ImageGalleryItem">
        <img src={webformatURL} alt={alt} onClick={toggleModal} />
      </li>
      {modal && (
        <Modal largeImageURL={largeImageURL} alt={alt} onClose={toggleModal} />
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
