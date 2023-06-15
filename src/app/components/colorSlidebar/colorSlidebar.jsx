import { useState } from "react";
import Circle from "../../data";
import styles from "./colorSliderbar.module.css";

export default function ColorSlider({ hue, setHue }) {
    const handleSliderChange = (event) => {
        const { value } = event.target;
        const hue = (value * 360) / 255;
        setHue(parseInt(hue));
    };

    console.log("hue", hue);

    return (
        <div>
            <input
                className={styles.slider}
                type="range"
                min={0}
                max={255}
                defaultValue={0}
                onChange={handleSliderChange}
            />
            <Circle color={hue} />
        </div>
    );
}
