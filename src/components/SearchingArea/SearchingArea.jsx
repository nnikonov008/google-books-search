import React from "react";
import css from "./SearchingArea.module.css";
import Preloader from "../common/Preloader/Preloader";

const SearchingArea = (props) => {
    const {
        searchingField, subject, sortingMethod, startIndex, isFetching, searchBooks,
        updateSearchingFieldText, updateSortingMethod, updateSubject,
    } = props;

    const addNewText = (e) => updateSearchingFieldText(e.target.value);

    const choseSortingMethod = (e) => updateSortingMethod(e.target.value);

    const choseSubject = (e) => updateSubject(e.target.value);

    const searchBooksThunk = (e) => {
        e.preventDefault();
        searchBooks(searchingField, subject, sortingMethod, startIndex);
    }

    return (
        <div className={css.searchingArea}>
            <div>
                <p className={css.title}>Google search books</p>
                <form onSubmit={searchBooksThunk}>
                    <input className={css.input} onChange={addNewText} type="text" value={searchingField}/>
                    <button className={css.button} type="submit">Search</button>
                    <div>
                        <div className={css.selector}>
                            <div className={css.selectorTitle}>Sorting by:</div>
                            <select className={css.selectorField} defaultValue="relevance"
                                    onChange={choseSortingMethod}>
                                <option value="relevance">Relevance</option>
                                <option value="newest">Newest</option>
                            </select>
                        </div>
                        <div className={css.selector}>
                            <div className={css.selectorTitle}>Categories:</div>
                            <select className={css.selectorField} defaultValue="all" onChange={choseSubject}>
                                <option value="all">All</option>
                                <option value="art">Art</option>
                                <option value="biography">Biography</option>
                                <option value="computers">Computers</option>
                                <option value="history">History</option>
                                <option value="medical">Medical</option>
                                <option value="poetry">Poetry</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div>{isFetching === "searching" ? <Preloader/> : null}</div>
        </div>
    )
}

export default SearchingArea;
