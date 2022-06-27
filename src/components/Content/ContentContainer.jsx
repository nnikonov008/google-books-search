import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {deleteChosenBook, loadMoreBooks, setChosenBook} from "../../reducer/reducer";

class ContentContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <Content state={state}/>
        );
    }
}

const mapStateToProps = (state) => ({
    books: state.books, totalItems: state.totalItems, startIndex: state.startIndex,
    searchingField: state.searchingField, subject: state.subject, sortingMethod: state.sortingMethod,
    isFetching: state.isFetching, chosenBook: state.chosenBook,
});

// eslint-disable-next-line no-unused-vars
export default ContentContainer = connect(mapStateToProps, {
    loadMoreBooks, setChosenBook, deleteChosenBook
})(Content);
