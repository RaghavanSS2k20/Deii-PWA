import React, { useState, useEffect } from "react";
import ChatScreenStyles from "./chatscreen.module.css";
import { ChatItem } from "../_widgets/ChatItem/ChatItemComponent";
import DynamicHeightTextArea from "../_widgets/DynamicHeightTextInput/dynamicHeighTextInput";
import { io } from "socket.io-client"; // Import Socket.IO client
let count = 0
const ChatScreenComponent = (props) => {
    const [question, setQuestion] = useState('')

    count=count+1
    
    const [chatHistory, setChatHistory] = useState([]);
    const [currentResponses, setCurrentResponses] = useState([]);
    const socket = io("http://127.0.0.1:5000"); // Connect to Socket.IO server

    
    console.log("From Chat sctreen",question)
    const handleSendMessage = (message) => {

        setChatHistory([...chatHistory, message]); // Add the message to the chat history
        socket.emit("perform_task", { prompt: message }); // Emit the event with the prompt

        socket.on("response", (data) => {
            if (data.content) {
                setCurrentResponses((prev) => [...prev, data.content]); // Add the response part to the array
            } else if (data.error) {
                console.error(data.error); // Handle error response
            }
        });
    };
    useEffect(()=>{
        if (props.question) {
            console.log("Done", props.question)
            handleSendMessage(props.question);
        }
    },[props.question])

    return (
        <div className={ChatScreenStyles["container"]}>
            <div className={ChatScreenStyles["main-content"]}>
                <div className={ChatScreenStyles["chat-container"]}>
                    <div className={ChatScreenStyles["chat-content"]}>
                        {chatHistory.map((message, index) => (
                            <React.Fragment key={index}>
                                <ChatItem question={message}  answer={currentResponses[index] && currentResponses[index]} />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={ChatScreenStyles["prompt-input"]}>
                        <DynamicHeightTextArea
                            suggestions={"What are my assignments pending?"}
                            minRows={10}
                            onSendMessage={handleSendMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatScreenComponent;