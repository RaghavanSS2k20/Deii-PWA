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
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) { // Check for Enter key without Shift
            e.preventDefault(); // Prevent adding a new line
            props.onSubmit(prompt); // Call the submit function passed from parent
            setPrompt(""); // Clear the textarea after submission
        }
    };

    // const handleChange=(e) =>{
    //     setPrompt(e.target.value)
    // }

    return(
        <textarea
        ref={textareaRef}
        className={TextAreaStyles["prompt-input"]}
        placeholder="How many classes to bunk on Deep Learning"
        value={props.value}
        onChange={props.handleChange}
        onKeyDown={handleKeyDown}
        style={{ height: props.height, overflowY: 'auto' }}
    />
    )
}