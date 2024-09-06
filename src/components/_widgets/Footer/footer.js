import React, { useState } from "react";
import styles from "./footer.module.css";

const Footer = ({ onComponentChange }) => {
    const [selectedKey, setSelectedKey] = useState(null); // State to track the selected key

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    const handleKeyClick = (key) => {
        setSelectedKey(key); // Update the selected key
        if (key === "about" || key === "stats") {
            onComponentChange(key); // Call the function to change the component
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles["keys-container"]}>
                <div
                    className={`${styles["key"]} ${selectedKey === "about" ? styles.selected : ""}`}
                    onClick={() => handleKeyClick("about")}
                >
                    About Us
                </div>
                <div
                    className={`${styles["key"]} ${selectedKey === "contribute" ? styles.selected : ""}`}
                    onClick={() => openInNewTab("https://github.com/RaghavanSS2k20/deii-PWA")}
                >
                    Contribute
                </div>
                <div
                    className={`${styles["key"]} ${selectedKey === "connect" ? styles.selected : ""}`}
                    onClick={() => openInNewTab("https://www.linkedin.com/in/raghavan-m-7640531b0")}
                >
                    Connect
                </div>
                <div
                    className={`${styles["key"]} ${selectedKey === "stats" ? styles.selected : ""}`}
                    onClick={() => handleKeyClick("stats")}
                >
                    Stats For Nerds
                </div>
            </div>
            <div className={styles["footer-content"]}>
                <p>
                    Deii may produce inaccurate results.{" "}
                    <span>
                        <a href="https://github.com/RaghavanSS2k20" target="_blank" rel="noopener noreferrer">
                            Brought to life by RN75
                        </a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;