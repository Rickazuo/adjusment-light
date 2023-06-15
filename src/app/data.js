import React from "react";
import styles from "./page.module.css";
const Circle = ({ color }) => {
    console.log(color);

    return (
        <div
            className={styles.circle}
            style={{
                backgroundColor: `hsl(${color}, 100%, 50%)`,
            }}
        ></div>
    );
};

export default Circle;
