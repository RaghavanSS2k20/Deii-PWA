import React from "react";
import ChatScreenStyles from "./chatscreen.module.css"
import { ChatItem } from "../_widgets/ChatItem/ChatItemComponent";
import DynamicHeightTextArea from "../_widgets/DynamicHeightTextInput/dynamicHeighTextInput";
import { SparkleSVGComponent } from "../../assets/SVGComponent";
const ChatScreenComponent = ()=>{
    return(
        <div className={ChatScreenStyles["container"]}>
            <div className={ChatScreenStyles["sensing-navbar"]}>
                <p className={ChatScreenStyles["content"]}>What are my assignments Pending</p>
            </div>
            <div className={ChatScreenStyles["main-content"]}>
                <div className={ChatScreenStyles["chat-container"]}>
                    <div className={ChatScreenStyles["chat-content"]}>
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
                    </div>

                    <div className={ChatScreenStyles["prompt-input"]}>
                        <DynamicHeightTextArea suggestions={"What are my assignments pending?"} minRows={10}  />
                       
                    </div>

                </div>
                <div className={ChatScreenStyles["plot-container"]}>

                </div>

            </div>

        </div>
    )
}

export default ChatScreenComponent