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
    const [clearSelected, setClearSelected] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [component, setComponent] = useState("index")
    const [data, setData] = useState('')
    const toggleSidebar = () => {
        console.log("JIIII")
        setIsOpen(!isOpen);
    };
    
    const handleComponentChange = (component, data="") => {
        console.log("changing component to , ",component)
        setComponent(component);
        if(data){
            setData(data)
        }
    };
    return(
    <div className="container">
      
        <div className="side-nav">
            <div className="side-nav-container">
                <div className="util-buttons">
                    <HamburgerSVGComponent size={26} fill={"white"} />
                    <div className="new-button" onClick={()=>{
                        handleComponentChange('index')
                        setClearSelected(true)
                    }}>
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
            {component === "index" && <IndexScreen onComponentChange={handleComponentChange}/>}
            {component === "stats" && <StatsForNerds/>}
            {component === "about" && <AboutUsScreen/>}
            {component === "chat" && <ChatScreenComponent question={data}/> }
            <Footer 
                onComponentChange={handleComponentChange} 
                clearSelection={clearSelected}
                handleSelection = {setClearSelected}
            />
            
            
        </div>
        
    </div>  
    )
}
export default TextMode;