import React from "react";

const ListMaker = (props) => {
    const {collection, className} = props;

    const listItems = collection.map((item, index) =>
        <li key={index.toString()}>{item}</li>
    );
    return (
        <ul className={className}>{listItems}</ul>
    );
}

export default ListMaker;
