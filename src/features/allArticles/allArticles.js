import React, {useEffect} from "react";

// action creators
import { loadData } from "./allArticlesSlice"; 
import { addToFavorite } from "../favoriteArticles/favoriteArticlesSlice";

// components
import ArticleCard from "../../components/articleCard";
import FavoriteButton from "../../components/FavoriteButton";

// icon
const favoriteIconURL = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/favorite.svg';

export const AllArticles = (props) => {
    const { allArticles, dispatch } = props;

    const onFirstRender = () => {
      dispatch(loadData());
    }
    useEffect(onFirstRender, []);

    const onAddArticleHandler = (article) => {
        dispatch(addToFavorite(article));
    }

    return (
        <div className="recipes-container">
            {allArticles.map((article) => (
                <ArticleCard article={article} key={article.id}>
                <FavoriteButton
                  onClickHandler={() => onAddArticleHandler(article)}
                  icon={favoriteIconURL}
                >
                  Add to Favorites
                </FavoriteButton>
              </ArticleCard>
            ))}
        </div>
    )
}