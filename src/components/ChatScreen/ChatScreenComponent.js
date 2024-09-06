import React, { useState } from "react";
import ChatScreenStyles from "./chatscreen.module.css";
import { ChatItem } from "../_widgets/ChatItem/ChatItemComponent";
import DynamicHeightTextArea from "../_widgets/DynamicHeightTextInput/dynamicHeighTextInput";
import { SparkleSVGComponent } from "../../assets/SVGComponent";
import { io } from "socket.io-client"; // Import Socket.IO client
// require('dotenv').config()

const ChatScreenComponent = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentResponse, setCurrentResponse] = useState("");
  const token = process.env.REACT_APP_IDX_TOKEN
  console.log("TOKEN HERE : ", token)
  const socket = io("https://5000-idx-toolazytotype-1722793283160.cluster-bec2e4635ng44w7ed22sa22hes.cloudworkstations.dev/",{
    extraHeaders: {
        Authorization: `Bearer ${token}`  // Send the token in the Authorization header
    }
  }); // Connect to Socket.IO server

  const handleSendMessage = (message) => {
    setChatHistory([...chatHistory, message]); // Add the message to the chat history
    socket.emit("perform_task", { prompt: message }); // Emit the event with the prompt

    socket.on("response", (data) => {
      if (data.content) {
        setCurrentResponse((prev) => prev + data.content); // Append the response part
      } else if (data.error) {
        console.error(data.error); // Handle error response
      }
    });
  };

  return (
    <div className={ChatScreenStyles["container"]}>
      {/* ... */}
      <div className={ChatScreenStyles["main-content"]}>
        <div className={ChatScreenStyles["chat-container"]}>
          <div className={ChatScreenStyles["chat-content"]}>
            {chatHistory.map((message, index) => (
              <ChatItem
                key={index}
                question={message}
                answer={index === chatHistory.length - 1 ? currentResponse : ""}
              />
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
        {/* ... */}
      </div>
    </div>
  );
};

export default ChatScreenComponent;