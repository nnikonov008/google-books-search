import React from "react";
import ChosenBookInfo from "./ChosenBookInfo/ChosenBookInfo";
import BooksList from "./BooksList/BooksList";
import Plug from "./Plug/Plug";

const Content = (props) => {
    const {
        books, totalItems, startIndex, searchingField, chosenBook, deleteChosenBook,
        subject, sortingMethod, isFetching, loadMoreBooks, setChosenBook,
    } = props;

    if (books.length === 0) {
        return (
            <Plug isFetching={isFetching}/>
        );
    }

    if (chosenBook) {
        return (
            <ChosenBookInfo chosenBook={chosenBook} deleteChosenBook={deleteChosenBook}/>
        );
    }

    return (
        <BooksList loadMoreBooks={loadMoreBooks} setChosenBook={setChosenBook}
                   searchingField={searchingField} startIndex={startIndex} totalItems={totalItems}
                   subject={subject} sortingMethod={sortingMethod} books={books} isFetching={isFetching}/>
    )
}

export default Content;
