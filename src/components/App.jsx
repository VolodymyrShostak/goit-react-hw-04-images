import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GeterPictures } from './api.jsx';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export function App() {
  const [pictures, setPictures] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [modal, setModal] = useState('');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
   
if(keyWord) loadSearchingImg();

   
    // eslint-disable-next-line
  }, [keyWord, page]);

  const onSearchImage = keyWord => {
   
    setKeyWord(keyWord);
    setPictures([]);
    setPage(1);
  };

  const loadSearchingImg = async () => {
       setLoader(true);
    setHideButton(true);
   
    const data = await GeterPictures(keyWord, page);
    if (!data.hits.length) {
      setLoader(false);
      return toast('Sorry, we did not find any pictures...');
    }

    setPictures([...pictures, ...data.hits]);
    setLoader(false);
  };

  const onClickLoadMore = () => {
    setPage(page + 1);
  };
  const onModalOpen = url => {
    setModal(url);
  };

  const onModalClose = () => {
    setModal('');
  };

  return (
    <>
      <Searchbar onSubmit={onSearchImage} />
      <ToastContainer autoClose={3000} />
      <>
        {loader && <Loader />}
        <ImageGallery pictures={pictures} onClick={onModalOpen} />
        {pictures.length > 0 && hideButton && (
          <Button onClick={onClickLoadMore} />
        )}

        {modal && <Modal closeModal={onModalClose} url={modal} />}
      </>
    </>
  );
}
