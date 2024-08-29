import React from "react"
import { HamburgerSVGComponent } from "../../assets/SVGComponent"
import { AddSVGComponent } from "../../assets/SVGComponent"
import "./styles.css"

import IndexScreen from "../IndexScreen/IndexScreenComponnet"
import Footer from "../_widgets/Footer/footer"
const TextMode = () => {
    return(
    <div className="container">
      
        <div className="side-nav">
            <div className="side-nav-container">
                <div className="util-buttons">
                    <HamburgerSVGComponent size={26} fill={"white"}/>
                    <div className="new-button">
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
                    <HamburgerSVGComponent size={26} fill={"white"}/>
                    <p className="logo">Deii</p>
                </div>
            </div>
            <IndexScreen/>
            <Footer/>
        </div>
        
    </div>  
    )
}
export default TextMode;