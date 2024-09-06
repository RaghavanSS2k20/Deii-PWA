import React from "react";
import styles from "./nerds-styles.module.css"
import ArchitectureImage from "../../assets/backend-architecture.png"
const StatsForNerds = ()=>{
    return(
        <div className={styles["container"]}>
        <div className={styles["content"]}>
            <p className={styles["intro"]}>
                Stats For Nerds
            </p>
            <h2 className={styles["heading"]}>Technical Overview of Deii</h2>
            <p className={styles["paragraph"]}>
                Deii is a mobile-focused React application that leverages the power of modern web technologies. React was chosen for the frontend due to my fluency in it, allowing for a seamless and responsive user experience.
            </p>
    
            <h2 className={styles["heading"]}>Backend Architecture</h2>
            <p className={styles["paragraph"]}>
                The backend of Deii is lightweight and built using Flask, a micro web framework for Python. This choice allows for quick development and easy deployment while maintaining a robust API structure.
            </p>
    
            <h2 className={styles["heading"]}>Large Language Model (LLM)</h2>
            <p className={styles["paragraph"]}>
                Deii utilizes the Gemini API, which is known for its advanced natural language processing capabilities. One of the challenges we face with the Gemini API is its rate limits. The Gemini API enforces a limit on the number of requests that can be made within a specific timeframe, which can impact the responsiveness of the application. Understanding and managing these limits is crucial for ensuring a smooth user experience.
            </p>
    
            <h2 className={styles["heading"]}>Langchain Tools</h2>
            <p className={styles["paragraph"]}>
                The backend is designed using a tool architecture inspired by Langchain. Langchain provides a framework for developing applications powered by language models, allowing us to integrate various tools seamlessly. In our architecture, when a user query is received, the LLM decides which tool to call based on the context of the query. 
            </p>
            <p className={styles["paragraph"]}>
                The process involves several steps:
            </p>
            <ul className={styles["paragraph"]}>
                <li><strong>User Query:</strong> The user submits a query through the application.</li>
                <li><strong>LLM Decision:</strong> The LLM analyzes the query and determines the appropriate tool to use.</li>
                <li><strong>Tool Call:</strong> The selected tool is invoked to process the request.</li>
                <li><strong>Data Cleaning:</strong> The output from the tool is cleaned and formatted for presentation.</li>
                <li><strong>Summarization:</strong> Finally, the LLM summarizes the information before presenting it to the user.</li>
            </ul>
            {/* <img 
                src={ArchitectureImage} 
                alt="Architecture of Deii" 
                className={styles["architecture-image"]} 
            /> */}
            <h2 className={styles["heading"]}>Future Directions</h2>
            <p className={styles["paragraph"]}>
                We are looking to scale Deii into a reliable and robust API that can handle increasing user demands while maintaining performance and accuracy. Continuous improvements in our architecture and API management will be essential in achieving this goal.
            </p>
        </div>
    </div>
    )
}
export default StatsForNerds
