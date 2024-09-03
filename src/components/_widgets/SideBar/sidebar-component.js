import React from "react";
import sidebarStyles from "./sidebar.module.css"
import { AddSVGComponent } from "../../../assets/SVGComponent";
const SideBar = ({ isOpen, toggleSidebar })=>{
    return(
        <div className={`${sidebarStyles.container} ${isOpen ? sidebarStyles.open : ''}`}>
            <div className={sidebarStyles.header}>
                <div className={sidebarStyles["new-button"]}>
                    <AddSVGComponent size={20} fill="#8C9190"/>
                    <p>New Thread</p>
                </div>
            </div>

            <div className={sidebarStyles.footer}>
                <p className={sidebarStyles.item}>About Us</p>
                <p className={sidebarStyles.item}>Contribute</p>
                <p className={sidebarStyles.item}>Connect</p>
                <p className={sidebarStyles.item}>Stats for nerds</p>
                <p className={sidebarStyles.item}><span><a href="https://github.com/RaghavanSS2k20" target="_blank" rel="noopener noreferrer">Bought to life By Raghav1</a></span></p>
            </div>   

        </div>
    )

}
export default SideBar;