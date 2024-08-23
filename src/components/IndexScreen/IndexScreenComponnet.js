import React from "react";
import IndexScreenStyles from "./index.module.css"
import { CrossSVGComponent, SparkleSVGComponent } from "../../assets/SVGComponent";
import { useState, useEffect, useRef } from "react";
const IndexScreen = ()=>{
    const [prompt, setPrompt] = useState('');
    const [bannerClicked, setBannerClicked] = useState(false)
    const [inputAreaHeight, setInputAreaHeight] = useState('auto')
    const maxHeight = 200;
    const textareaRef = useRef(null);
    const handleCloseBanner = ()=>{
        setBannerClicked(true)
    }
    const handleChange = (event) => {
        const { value } = event.target;
        setPrompt(value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            // Reset height to auto to shrink if necessary
            setInputAreaHeight('auto');
            // Set height based on scrollHeight, but limit it to maxHeight
            const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
            setInputAreaHeight(newHeight);
        }
    }, [prompt]);
    return(
        <div className={IndexScreenStyles.container}>
            {!bannerClicked &&(
                <div className={IndexScreenStyles.banner}>
                    <p>Deii uses Gemini, App under development</p>
                    <div className={IndexScreenStyles["cross-button"]} onClick={handleCloseBanner} >
                        <CrossSVGComponent size={15} fill={"white"}/>
                    </div>
                    
                </div>
            )}
            <div className={IndexScreenStyles["hero-container"]}>                
                <div className={IndexScreenStyles["hero-text"]}>
                    <span className={IndexScreenStyles["greet"]}>
                        Hello From Deii
                    </span>
                    <span className={IndexScreenStyles["subhero"]}>
                        How can I help you today?
                    </span>

                </div>
                <div className={IndexScreenStyles["hero-content"]}>
                    <div className={IndexScreenStyles["form-container"]}>
                        <textarea
                            ref={textareaRef}
                            className={IndexScreenStyles["prompt-input"]}
                            placeholder="How many classes to bunk on Deep Learning"
                            value={prompt}
                            onChange={handleChange}
                            style={{ height: inputAreaHeight, overflowY: 'auto' }}
                        />
                        <div className={IndexScreenStyles["magic-button"]}>
                                <SparkleSVGComponent size={20} fill={"white"}/>
                        </div>

                    </div>
                    <div className={IndexScreenStyles["suggestions-box"]}>
                        <div className={IndexScreenStyles["suggestion-item"]}>
                            What is it up for me today?
                        </div>
                        <div className={IndexScreenStyles["suggestion-item"]}>
                            What is it up for me today?
                        </div>
                        <div className={IndexScreenStyles["suggestion-item"]}>
                            What is it up for me today?
                        </div>
                        <div className={IndexScreenStyles["suggestion-item"]}>
                            What is it up for me today?
                        </div>   
                    </div>
                </div>
            </div>

            
            
        </div>  

    )
}
export default IndexScreen;