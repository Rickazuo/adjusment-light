"use client";
import React, { useState } from "react";
import Circle from "../../data";
import styles from "./brightSlidebar.module.css";

export default function BrighterSlider() {
  const [bright, setBright] = useState("#00000");

  const handleSliderChange = (event) => {
    setBright(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={255}
        onChange={handleSliderChange}
        value={bright}
      />
      <Circle bright={bright} />
    </div>
  );
}
