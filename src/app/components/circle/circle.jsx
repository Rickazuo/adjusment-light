import React from "react";
import styles from "../../page.module.css";

const Circle = ({ hue, light, saturation }) => {
  const animationStyles = `
    @keyframes shadowPulse {
      0% {
        box-shadow: 0px 0px 53px 13px hsla(${hue}, ${light}%, ${saturation}%, 0.7);
      }
      25% {
        box-shadow: 0px 0px 70px 20px hsla(${hue}, ${light}%, ${saturation}%, 0.6);
      }
      50% {
        box-shadow: 0px 0px 53px 13px hsla(${hue}, ${light}%, ${saturation}%, 0.7);
      }
      75% {
        box-shadow: 0px 0px 40px 8px hsla(${hue}, ${light}%, ${saturation}%, 0.6);
      }
      100% {
        box-shadow: 0px 0px 53px 13px hsla(${hue}, ${light}%, ${saturation}%, 0.7);
      }
    }
  `;

  // Create a dynamic style tag with the animation styles
  const styleTag = document.createElement("style");
  styleTag.innerText = animationStyles;
  document.head.appendChild(styleTag);

  return (
    <div
      className={styles.circle}
      style={{
        backgroundColor: `hsl(${hue}, ${light}%, ${saturation}%)`,
        animation: "shadowPulse 6s infinite alternate", // Apply the keyframes animation here
      }}
    ></div>
  );
};

export default Circle;
