import React from "react";
import css from "./Plug.module.css";

const Plug = (props) => {
    const {isFetching} = props;
    return (
        isFetching
            ? <div className={css.inscription}>Searching...</div>
            : <div className={css.inscription}>What kind of book do you want?</div>
    );
}

export default Plug;
