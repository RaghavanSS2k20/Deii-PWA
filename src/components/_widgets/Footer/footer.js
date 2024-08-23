import React from "react";
import styles from "./footer.module.css"
const Footer = ()=>{
    return(
           <div className={styles.container}>
                <div className={styles["keys-container"]}>
                    <div className={styles["key"]}>
                        About Us
                    </div>
                    <div className={styles["key"]}>
                        Contribute
                    </div>
                    <div className={styles["key"]}>
                        Connect
                    </div>
                    <div className={styles["key"]}>
                        Stats For Nerds
                    </div>
                </div>
                <div className={styles["footer-content"]}>
                    <p>Deii May produce Inaacurate results  <span>Bought to life By RN75</span> </p>
                </div>
                
           </div>
    )
}
export default Footer;