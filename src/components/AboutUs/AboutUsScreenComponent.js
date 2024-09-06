import React from "react";
import styles from "./about-us.module.css"
const AboutUsScreen = ()=>{
    return(
        <div className={styles["container"]}>
        <div className={styles["content"]}>
            <p className={styles["intro"]}>
                About Deii
            </p>
            <h1 className={styles["heading"]}>Welcome to Deii</h1>
            <p className={styles["paragraph"]}>
                Deii is an innovative chatbot powered by advanced Large Language Model (LLM) technology, designed specifically for the students of PSG College of Technology. Our mission is to enhance the educational experience by providing quick and accurate information at your fingertips.
            </p>
    
            <h2 className={styles["heading"]}>What Can Deii Do?</h2>
            <p className={styles["paragraph"]}>
                Deii serves as your virtual assistant, equipped to assist with various academic tasks. Whether you need to check your attendance, find out how many classes you need to attend, or get updates on your submissions due on Nucleus, Deii is here to help.
            </p>
    
            <h2 className={styles["heading"]}>Features</h2>
            <p className={styles["paragraph"]}>
                - <strong>Attendance Tracking:</strong> Easily check your attendance records and stay updated on your class participation.
            </p>
            <p className={styles["paragraph"]}>
                - <strong>Class Reminders:</strong> Get notifications on how many classes you need to attend to maintain your academic standing.
            </p>
            <p className={styles["paragraph"]}>
                - <strong>Submission Alerts:</strong> Stay informed about your submission deadlines on Nucleus, ensuring you never miss a due date.
            </p>
            <p className={styles["paragraph"]}>
                - <strong>Submission Capability:</strong> Soon, you will be able to submit assignments directly through Deii. This feature is currently in development and will be available shortly.
            </p>
            <h2 className={styles["heading"]}>Powered by Gemini</h2>
            <p className={styles["paragraph"]}>
                Deii utilizes the cutting-edge Gemini model to deliver accurate, context-aware responses to your queries. With its advanced natural language processing capabilities, Deii understands your questions and provides relevant answers, making it a reliable academic companion.
            </p>
    
            <h2 className={styles["heading"]}>Join Us on This Journey</h2>
            <p className={styles["paragraph"]}>
                We invite you to explore Deii and take advantage of the features it offers. Our goal is to support your academic journey and make learning more accessible and efficient.
            </p>
        </div>
    </div>
    )
}
export default AboutUsScreen;
