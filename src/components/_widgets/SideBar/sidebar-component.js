import React, { useState } from "react";
import sidebarStyles from "./sidebar.module.css";
import { AddSVGComponent } from "../../../assets/SVGComponent";

const SideBar = ({ isOpen, toggleSidebar, onComponentChange }) => {
    const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item

    const handleItemClick = (item) => {
        setSelectedItem(item); // Update the selected item
        if (item === "about" || item === "stats") {
            onComponentChange(item); // Call the function to change the component
            toggleSidebar()
        }
    };
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    };

    return (
        <div className={`${sidebarStyles.container} ${isOpen ? sidebarStyles.open : ''}`}>
            <div className={sidebarStyles.header}>
                <div className={sidebarStyles["new-button"]}>
                    <AddSVGComponent size={20} fill="#8C9190" />
                    <p>New Thread</p>
                </div>
            </div>

            <div className={sidebarStyles.footer}>
                <p
                    className={`${sidebarStyles.item} ${selectedItem === "about" ? sidebarStyles.selected : ""}`}
                    onClick={() => handleItemClick("about")}
                >
                    About Us
                </p>
                <p
                    className={`${sidebarStyles.item} ${selectedItem === "contribute" ? sidebarStyles.selected : ""}`}
                    onClick={() => openInNewTab("https://github.com/RaghavanSS2k20/deii-PWA")}
                >
                    Contribute
                </p>
                <p
                    className={`${sidebarStyles.item} ${selectedItem === "connect" ? sidebarStyles.selected : ""}`}
                    onClick={() => openInNewTab("https://www.linkedin.com/in/raghavan-m-7640531b0")}
                >
                    Connect
                </p>
                <p
                    className={`${sidebarStyles.item} ${selectedItem === "stats" ? sidebarStyles.selected : ""}`}
                    onClick={() => handleItemClick("stats")}
                >
                    Stats for nerds
                </p>
                <p className={sidebarStyles.item}>
                    <span>
                        <a href="https://github.com/RaghavanSS2k20" target="_blank" rel="noopener noreferrer">
                            Brought to life by Raghav1
                        </a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default SideBar;