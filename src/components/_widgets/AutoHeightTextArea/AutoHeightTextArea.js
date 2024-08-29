import React, { useEffect, useRef, useState} from "react";
import TextAreaStyles from "./autoheight-text-area.module.css"
export const AutoHeightTextArea=(props)=>{
    const textareaRef = useRef(null);
    const [prompt, setPrompt] = useState("");

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [prompt]);

    const handleChange=(e) =>{
        setPrompt(e.target.value)
    }

    return(
        <textarea
        ref={textareaRef}
        className={TextAreaStyles["prompt-input"]}
        placeholder="How many classes to bunk on Deep Learning"
        value={prompt}
        onChange={handleChange}
        style={{ height: props.height, overflowY: 'auto' }}
    />
    )
}