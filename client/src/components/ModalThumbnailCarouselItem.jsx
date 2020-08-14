/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const ModalThumbnailCarouselItem = (props) => {
  const { image, onClickHandler, id } = props;

  return (
    <li className="round-corners">
      <img
        id={`thumbnail-${id}`}
        src={image.small}
        alt="Product Thumbnail"
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
      />
    </li>
  );
};

ModalThumbnailCarouselItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default ModalThumbnailCarouselItem;