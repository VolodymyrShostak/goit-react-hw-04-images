import React from 'react';
import PropTypes from 'prop-types';
import { ImageItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Wrapper } from './styled';


export const ImageGallery = ({ pictures, onClick = () => { } }) => {
   
  
  return (
      <Wrapper>
        {pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={onClick}
          />
        ))}
      </Wrapper>
    );
};


ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}