import React from "react";
import { motion } from "framer-motion";
import styles from "./AboutMe.module.css"
const AboutMe = () => {

    return (
        <React.Fragment>
            <motion.div id="About" className={`${styles['about-me-container']}`}>
                <h2 className={styles.aboutme} >About Me</h2>
                <div className={styles.leftbox} >
                    <img src="https://avatars.githubusercontent.com/u/109061152?s=400&u=af6701bfb23bdafb04f0b9cbbf3ecee9ceb5cd55&v=4" alt="pfp" />
                    <ul>
                        <li>I am Shashank Raj.</li>
                        <li>I am a full stack web developer and have also developed desktop applications.</li>
                        <li>Data Structure and Algorithms Enthusiast.</li>
                        <li>I like UI/UX designing which I try to reflect on the websites I create. </li>
                    </ul>
                </div>
            </motion.div>
        </React.Fragment>
    )
};

export default AboutMe;