import React from "react";

import FavoriteButton from "../../components/FavoriteButton";
import ArticleCard from "../../components/articleCard";
import { removeFromFavorite } from "./favoriteArticlesSlice";

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg';

const FavoriteArticles = ( {favoriteArticles, dispatch} ) => {

    const onRemoveArticleHandler = (article) => {
        dispatch(removeFromFavorite(article));
    }

    return (
        <div id='favorite-recipes' className="recipes-container">
            {favoriteArticles.map(createArticleComponent)}
        </div>
    )

    function createArticleComponent(article) {
        return (
          <ArticleCard article={article} key={article.id}>
            <FavoriteButton
              onClickHandler={() => onRemoveArticleHandler(article)}
              icon={unfavoriteIconUrl}
            >
              Remove Favorite
            </FavoriteButton>
          </ArticleCard>
        )
      }

}
  
export default FavoriteArticles;
