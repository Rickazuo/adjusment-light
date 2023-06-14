"use client";
import React, { useState } from "react";
import Circle from "../../data";
import styles from "./colorSliderbar.module.css";

export default function ColorSlider() {
  const [color, setColor] = useState("#00000");

  const handleSliderChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={255}
        onChange={handleSliderChange}
        value={color}
      />
      <Circle color={color} />
    </div>
  );
}
