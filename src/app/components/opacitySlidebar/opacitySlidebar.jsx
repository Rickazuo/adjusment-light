"use client";
import React, { useState } from "react";
import Circle from "../../data";
import styles from "./opacitySlidebar.module.css";

export default function OpacitySlider() {
  const [opacity, setOpacity] = useState("#00000");

  const handleSliderChange = (event) => {
    setOpacity(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={255}
        onChange={handleSliderChange}
        value={opacity}
      />
      <Circle opacity={opacity} />
    </div>
  );
}
