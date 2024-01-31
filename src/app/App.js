import './App.css';
import React from 'react';
import { AllArticles } from '../features/allArticles/allArticles';
import FavoriteArticles from '../features/favoriteArticles/favoriteArticles';
import { SearchTerm } from '../features/searchTerm/searchTerm';

const App = (props) => {

  const {state, dispatch} = props;

  const visibleAllArticles = getFilteredArticles(state.allArticles, state.searchTerm);
  const visibleFavoriteArticles = getFilteredArticles(state.favoriteArticles, state.searchTerm);

  return (
    <main>
      <section>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
        />
      </section> 
      <section>
        <h2>Favorite Articles</h2>
        <FavoriteArticles
          favoriteArticles={visibleFavoriteArticles}
          dispatch={dispatch}
        />
      </section>
      <hr />
      <section>
        <h2>All Articles</h2>
        <AllArticles
          allArticles={visibleAllArticles} 
          dispatch={dispatch}
        />
      </section>
    </main>
  );
}

export default App;

function getFilteredArticles(articles, searchTerm) {
  return articles.filter(article => article.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
