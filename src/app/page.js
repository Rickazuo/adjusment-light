"use client";
import Image from "next/image";
import styles from "./page.module.css";
import ColorSlider from "./components/colorSlidebar/colorSlidebar";
import { useState } from "react";
import color from "../../public/color.svg";
import bright from "../../public/bright.svg";
import opacity from "../../public/opacity.svg";
import BrighterSlider from "./components/brightSlidebar/brightSlidebar";
import OpacitySlider from "./components/opacitySlidebar/opacitySlidebar";

export default function Home() {
    const [hue, setHue] = useState(0);

    return (
        <main className={styles.main}>
            <span className={styles.title}>Ajustes de Iluminação</span>
            <div className={styles.slidersContainer}>
                <div className={styles.sliders}>
                    <Image
                        src={color}
                        alt="icon of color palette"
                        width={24}
                        height={24}
                    />
                    <ColorSlider hue={hue} setHue={setHue} />
                </div>
                <div className={styles.sliders}>
                    <Image
                        src={bright}
                        alt="icon of color bright"
                        width={24}
                        height={24}
                    />
                    <BrighterSlider />
                </div>
                <div className={styles.sliders}>
                    <Image
                        src={opacity}
                        alt="icon of color opacity"
                        width={24}
                        height={24}
                    />
                    <OpacitySlider />
                </div>
            </div>
        </main>
    );
}
