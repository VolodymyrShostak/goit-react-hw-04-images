import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { WrapperSearchbar, SearchForm, SearchFormInput,SearchFormButton,SearchFormButtonLabel } from './styled.js';

export class Searchbar extends React.Component {
  state = {
    search: '',
  };

onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.trim() });
  };

  
  onSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      toast.warning('Please, enter a keyword...');
      return;
    }
    const keyWord = this.state.search;
    this.props.onSubmit(keyWord);
   this.setState({ search: '' });
  };

  render() {
    return (
      <WrapperSearchbar>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={this.state.search}
            name="search"
            onChange={this.onChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </WrapperSearchbar>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
