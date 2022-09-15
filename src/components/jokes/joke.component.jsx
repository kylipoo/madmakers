import { useState, useEffect } from 'react';

import CardList from '../../components/card-list/card-list.component';
import SearchBox from '../../components/search-box/search-box.component';
import {jokeCategories} from '../jokes/joke.categories';
const Jokes = () => {
  const [searchField, setSearchField] = useState('');
  const [filteredJokes, setFilteredJokes] = useState(jokeCategories);

  useEffect(() => {
    const newFilteredMonsters = jokeCategories.filter((jokeType) => {
      return jokeType.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredJokes(newFilteredMonsters);
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Jokes</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search jokes'
      />
      <CardList monsters={filteredJokes} />
    </div>
  );
};

export default Jokes;
