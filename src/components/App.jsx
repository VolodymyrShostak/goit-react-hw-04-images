import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GeterPictures } from './api.jsx';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends React.Component {
  state = {
    pictures: [],
    keyWord: '',
    modal: '',
    page: 1,
    loader: false,
    hideButton: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { keyWord, page } = this.state;
    if (prevState.keyWord !== keyWord || prevState.page !== page) {
      return this.loadSearchingImg();
    }
  }

  onSearchImage = keyWord => {
    if (!keyWord || keyWord === this.state.keyWord) return;

    this.setState({ pictures: [], keyWord: keyWord, page: 1 });
  };

  loadSearchingImg = async () => {
    this.setState({ loader: true, hideButton: true });
    const { keyWord, page } = this.state;
    const data = await GeterPictures(keyWord, page);
    if (!data.hits.length) {
      this.setState({ loader: false });
      return toast('Sorry, we did not find any pictures...');
    }

    this.setState(prevState => ({
      pictures: [...prevState.pictures, ...data.hits],
      loader: false,
    }));
  };

  onClickLoadMore = () => {
    this.setState({ page: this.state.page + 1 });
  };
  onModalOpen = url => {
    this.setState({ modal: url });
  };

  onModalClose = () => {
    this.setState({
      modal: '',
    });
  };

  render = () => {
    return (
      <>
        <Searchbar onSubmit={this.onSearchImage} />
        <ToastContainer autoClose={3000} />
        <>
          {this.state.loader && <Loader />}
          <ImageGallery
            pictures={this.state.pictures}
            onClick={this.onModalOpen}
          />
          {this.state.pictures.length > 0 && this.state.hideButton && (
            
            <Button onClick={this.onClickLoadMore} />
          )}

          {this.state.modal && (
            <Modal closeModal={this.onModalClose} url={this.state.modal} />
          )}
        </>
      </>
    );
  };
}
