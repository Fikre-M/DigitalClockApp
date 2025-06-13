import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
        <svg
            viewBox="0 0 3000 120"
            className={styles.logoSvg}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* First A */}
            <line
            x1="20"
            y1="100"
            x2="40"
            y2="20"
            stroke="#E17C4E"
            strokeWidth="6"
            />
            <line
            x1="60"
            y1="100"
            x2="40"
            y2="20"
            stroke="#E17C4E"
            strokeWidth="6"
            />

            {/* Z */}
            {/* Z (inverted) */}
            <line
            x1="70"
            y1="25"
            x2="110"
            y2="25"
            stroke="#E17C4E"
            strokeWidth="6"
            />
            <line
            x1="110"
            y1="25"
            x2="70"
            y2="100"
            stroke="#E17C4E"
            strokeWidth="6"
            />
            <line
            x1="70"
            y1="100"
            x2="110"
            y2="100"
            stroke="#E17C4E"
            strokeWidth="6"
            />

            {/* Second A */}
            <line
            x1="130"
            y1="100"
            x2="150"
            y2="20"
            stroke="#E17C4E"
            strokeWidth="6"
            />
            <line
            x1="170"
            y1="100"
            x2="150"
            y2="20"
            stroke="#E17C4E"
            strokeWidth="6"
            />

            {/* G */}
            {/* G - refined to reduce the right gap */}
            <path
            d="M240 30 
        Q200 30, 200 65 
        Q200 100, 240 100 
        Q260 100, 255 65"
            fill="none"
            stroke="#E17C4E"
            strokeWidth="8"
            />
            <line
            x1="215"
            y1="65"
            x2="258"
            y2="65"
            stroke="#E17C4E"
            strokeWidth="8"
            />

            {/* E */}
            <line
            x1="280"
            y1="20"
            x2="320"
            y2="20"
            stroke="#6B4721"
            strokeWidth="6"
            />
            <line
            x1="280"
            y1="60"
            x2="310"
            y2="60"
            stroke="#6B4721"
            strokeWidth="6"
            />
            <line
            x1="280"
            y1="100"
            x2="320"
            y2="100"
            stroke="#6B4721"
            strokeWidth="6"
            />
        </svg>
        </div>
    );
};

export default Logo;
