import React from "react";
import ChatStyles from "./chat-item.module.css"
export const ChatItem = ()=>{
    return(
        <div className={ChatStyles.container}>
            <div className={ChatStyles.question}>
                <p></p>
            </div>
            <div className={ChatStyles.answer}>
               
            </div>
        </div>
    )
}