import React from "react";
import styles from "../../page.module.css";
const Circle = ({ hue, light, saturation }) => {
    return (
        <div
            className={styles.circle}
            style={{
                backgroundColor: `hsl(${hue}, ${light}%, ${saturation}%)`,
            }}
        ></div>
    );
};

export default Circle;
