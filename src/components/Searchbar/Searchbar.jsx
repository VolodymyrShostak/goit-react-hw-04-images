import {useState} from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { WrapperSearchbar, SearchForm, SearchFormInput,SearchFormButton,SearchFormButtonLabel } from './styled.js';

export  function Searchbar({ onSubmit }) {
  const [search, setSearch] = useState('') 

const onChange = e => {
    const { value } = e.currentTarget;
    setSearch(value.trim());
  };

  
  const onHandleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.warning('Please, enter a keyword...');
      return;
    }
  
    onSubmit(search);
   setSearch('');
  };

  
    return (
      <WrapperSearchbar>
        <SearchForm onSubmit={onHandleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={search}
            name="search"
            onChange={onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </WrapperSearchbar>
    );
  }


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
