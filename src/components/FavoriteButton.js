import React from "react";

const FavoriteButton = ({children, onClickHandler, icon}) => {
    return (
        <button className="favorite-button" onClick={onClickHandler}>
            <img className="heart-icon" alt="" src={icon} />
            {children}
        </button>
    )
}

export default FavoriteButton;