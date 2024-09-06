import React from "react";
import ChatStyles from "./chat-item.module.css"
export const ChatItem = ()=>{
    return(
        <div className={ChatStyles.container}>
            <div className={ChatStyles.question}>
                <p>What are my assignments Pending</p>
            </div>
            <div className={ChatStyles.answer}>
                You can bunk 2 classes of COMPUTER VISION AND IMAGE ANALYSIS (82% attendance), 3 classes of DEEP LEARNING (86% attendance), 4 classes of DEEP LEARNING LAB (84% attendance), 9 classes of COMPUTER VISION LAB (95% attendance), 6 classes of SOCIAL NETWORK ANALYSIS (85% attendance), and 9 classes of  PRINCIPLES OF MANAGEMENT AND BEHAVIOURAL SCIENCE (91% attendance). However, you only have 2 classes to bunk for SOFTWARE TESTING (75% attendance) - attend classes regularly to maintain good attendance. You also need to attend 2 classes of FUNCTIONAL PROGRAMMING LAB (74% attendance) as a high priority to improve your attendance.
            </div>
        </div>
    )
}