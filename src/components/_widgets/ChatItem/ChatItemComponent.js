import React from "react";
import ChatStyles from "./chat-item.module.css";

export const ChatItem = ({ question, answer }) => {
    return (
        <div className={ChatStyles.container}>
            {question && (  // Only render the question if it exists
                <div className={ChatStyles.question}>
                    <p>{question}</p>
                </div>
            )}
            {answer && (  // Only render the answer if it exists
                <div className={ChatStyles.answer}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};