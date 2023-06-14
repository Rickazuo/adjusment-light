import React from "react";
import styles from "./page.module.css"
const Circle = ({color}) => {
    const divStyle = {
        backgroundColor: color,
    };

    return <div className={styles.circle} style={divStyle}></div>
};

export default Circle;