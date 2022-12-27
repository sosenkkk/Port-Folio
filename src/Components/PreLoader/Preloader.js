import React from "react";
import styles from "./Preloader.module.css"
const Preloader = () => {

    return (
        <React.Fragment>
            <div className={`${styles.preloader} ${styles.elementToFadeInAndOut}`} >
                <div className="proloader_holder" >
                    <h1>Initialising...</h1>
                </div>
            </div>
        </React.Fragment>
    );

};

export default Preloader;