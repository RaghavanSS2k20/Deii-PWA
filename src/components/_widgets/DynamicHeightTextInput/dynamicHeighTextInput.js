import React from "react";
import styles from "./dynamicheight-textinput-styles.module.css"
import { useEffect, useRef, useState } from "react";
import { SparkleSVGComponent } from "../../../assets/SVGComponent";
const DynamicHeightTextArea = ({minRows,suggestions,onSendMessage})=>{
    const [rows, setRows] = useState(minRows);
    const [value, setValue] = useState("");
  
    useEffect(() => {
      // Split the value by new line characters to determine the number of rows
      const rowCount = value.split("\n").length;
        console.log(rowCount)
      // Update the rows state if the current row count exceeds minRows
      setRows(Math.max(minRows, rowCount));
    }, [value, minRows]); // Add minRows as a dependency
    const handleSubmit = (event) => {
      event.preventDefault();
      onSendMessage(value); // Call the onSendMessage callback with the message
      setValue(""); // Clear the input field
    };
  return (
    <div className={styles["container"]}>
        <div className={styles["prompt-input"]}>
          <form onSubmit={handleSubmit}>
            <input  placeholder="How many classes to bunk today?"  onChange={(event) => setValue(event.target.value)}/>
          </form>
        </div>
        <div className={styles["functions"]}>
            <div className = {styles["magic-button"]}>
                <SparkleSVGComponent size={20} fill={"white"}/>
            </div>
        </div>
    </div>
  )
}

export default DynamicHeightTextArea