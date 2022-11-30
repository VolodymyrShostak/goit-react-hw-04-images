import React from 'react';
import PropTypes from 'prop-types';
import { WpapperLoadMoreBtn, LoadMoreBtn } from './styled.js';

export const Button = ({ onClick }) => {
  return (
    <WpapperLoadMoreBtn>
      <LoadMoreBtn
               onClick={onClick}
      >Load more</LoadMoreBtn>
    </WpapperLoadMoreBtn>
  );
};


Button.propTypes = {
  onClick: PropTypes.func
};