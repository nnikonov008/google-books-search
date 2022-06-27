import React from "react";
import css from "./BookCard.module.css";
import ListMaker from "../../../common/ListMaker";

const BookCard = (props) => {
    const {categories, title, authors} = props.volumeInfo;
    const {thumbnail} = props.volumeInfo.imageLinks;
    const {setChosenBook} = props;

    const showChosenBookInfo = () => {
        setChosenBook(props.volumeInfo);
    }

    return (
        <div onClick={showChosenBookInfo} className={css.bookCard}>
            <img className={css.bookCover} src={thumbnail} alt="Book cover"/>
            <div>
                <p className={css.category}>{categories[0]}</p>
                <p className={css.title}>{title}</p>
                <ListMaker collection={authors} className={css.authorsList}/>
            </div>
        </div>
    )
}

export default BookCard;
