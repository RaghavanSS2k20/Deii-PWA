import React from "react"
import { useState } from "react"
import { HamburgerSVGComponent } from "../../assets/SVGComponent"
import { AddSVGComponent } from "../../assets/SVGComponent"
import "./styles.css"
import ChatScreenComponent from "../ChatScreen/ChatScreenComponent"
import AboutUsScreen from "../AboutUs/AboutUsScreenComponent"
import IndexScreen from "../IndexScreen/IndexScreenComponnet"
import StatsForNerds from "../ForNerds/StatsForNerdsComponent"
import Footer from "../_widgets/Footer/footer"
import SideBar from "../_widgets/SideBar/sidebar-component"
const TextMode = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState("chat")
    const toggleSidebar = () => {
        console.log("JIIII")
        setIsOpen(!isOpen);
    };
    
    const handleComponentChange = (component) => {
        setComponent(component);
    };
    return(
    <div className="container">
      
        <div className="side-nav">
            <div className="side-nav-container">
                <div className="util-buttons">
                    <HamburgerSVGComponent size={26} fill={"white"} />
                    <div className="new-button" onClick={()=>{handleComponentChange('index')}}>
                        <AddSVGComponent size={26} fill={"white"}/>                        
                    </div>
                </div>
                <div className="support-buttons">
                    
                </div>

            </div>
        </div>
        <div className="content-container">
            <div className="navbar">
                <div className="options">
                    <div onClick={toggleSidebar}>
                        <HamburgerSVGComponent size={26} fill={"white"} />
                    </div>
                    <p className="logo">Deii</p>
                </div>
            </div>
            <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} onComponentChange = {handleComponentChange} />
            {/* <ChatScreenComponent/> */}
            {/* <IndexScreen/> */}
            {/* <StatsForNerds/> */}
            {/* <AboutUsScreen/> */}
            {component === "index" && <IndexScreen/>}
            {component === "stats" && <StatsForNerds/>}
            {component === "about" && <AboutUsScreen/>}
            {component === "chat" && <ChatScreenComponent/> }
            <Footer onComponentChange={handleComponentChange}/>
            
            
        </div>
        
    </div>  
    )
}
export default TextMode;