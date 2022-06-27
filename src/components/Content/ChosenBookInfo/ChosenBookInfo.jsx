import React from "react";
import css from "./ChosenBookInfo.module.css";
import ListMaker from "../../common/ListMaker";

const ChosenBookInfo = (props) => {
    const {categories, title, authors, description} = props.chosenBook;
    const {thumbnail} = props.chosenBook.imageLinks;

    return (
        <div className={css.chosenBookInfo}>
            <img className={css.bookCover} src={thumbnail} alt="Book cover"/>
            <div className={css.content}>
                <ListMaker collection={categories} className={css.categoriesList}/>
                <div className={css.title}>{title}</div>
                <ListMaker collection={authors} className={css.authorsList}/>
                <div className={css.description}>{description}</div>
                <button className={css.button} onClick={props.deleteChosenBook}>Back</button>
            </div>
        </div>
    )
}

export default ChosenBookInfo;
