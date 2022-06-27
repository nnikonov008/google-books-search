import React from "react";
import css from "./BooksList.module.css";
import Preloader from "../../common/Preloader/Preloader";
import BookCard from "./BookCard/BookCard";

const BookList = (props) => {
    const {
        setChosenBook, searchingField, subject, sortingMethod, startIndex,
        loadMoreBooks, totalItems, books, isFetching,
    } = props;

    const loadMoreBooksThunk = (e) => {
        e.preventDefault();
        loadMoreBooks(searchingField, subject, sortingMethod, startIndex + 12);
    }

    return (
        <div>
            <div className={css.totalItems}>Total items: {totalItems}</div>
            <div className={css.booksContainer}>
                {
                    books.map((book) => {
                        return <BookCard setChosenBook={setChosenBook} key={book.id} volumeInfo={book.volumeInfo}/>
                    })
                }
            </div>
            <div className={css.loadMore}>
                <button className={css.button} onClick={loadMoreBooksThunk}>Load more</button>
                <div>{isFetching === "loadingMore" ? <Preloader/> : null}</div>
            </div>
        </div>
    )
}

export default BookList;
