import React from 'react';
import PropTypes from 'prop-types';
import {ImageGalleryItemImage, ImageGalleryItem} from './styled.js';

export const ImageItem =( {webformatURL = '',
  largeImageURL = '',
  tags = '',
  onClick = () => {},}) => {
    return (
   
        <ImageGalleryItem>
  <ImageGalleryItemImage   src={webformatURL}
          alt={tags}
          onClick={() => onClick(largeImageURL)} />
</ImageGalleryItem>
    )
};
 
ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onClick: PropTypes.func

}
      