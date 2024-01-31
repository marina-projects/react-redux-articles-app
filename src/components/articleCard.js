import React from "react";

const ArticleCard = ({article, children}) => {
    return (
        <div key={article.id} className="recipe" tabIndex={0}>
            <span className="recipe-container">
                <h3 className="recipe-name">{article.name}</h3>
                <div className="image-container">
                <img src={article.img} alt="" className="recipe-image" />
                </div>
            </span>
            {children}
        </div>
    )
}

export default ArticleCard;