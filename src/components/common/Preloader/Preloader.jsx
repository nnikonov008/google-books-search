import React from "react";
import css from "./Preloader.module.css";
import preloader from "../../../assets/preloader.svg"

const Preloader = () => {
    return (
        <div>
            <img className={css.loadingWheel} src={preloader} alt="Loading wheel"/>
        </div>
    )
}

export default Preloader;
