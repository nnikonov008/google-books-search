import React from "react";
import {connect} from "react-redux";
import SearchingArea from "./SearchingArea";
import {searchBooks, updateSearchingFieldText, updateSortingMethod, updateSubject} from "../../reducer/reducer";

class SearchingAreaContainer extends React.Component {
    render() {
        const {state} = this.props;
        return (
            <SearchingArea state={state}/>
        );
    }
}

const mapStateToProps = (state) => ({
    searchingField: state.searchingField, subject: state.subject, sortingMethod: state.sortingMethod,
    startIndex: state.startIndex, isFetching: state.isFetching,
});

// eslint-disable-next-line no-unused-vars
export default SearchingAreaContainer = connect(mapStateToProps, {
    searchBooks, updateSearchingFieldText, updateSortingMethod, updateSubject,
})(SearchingArea);
