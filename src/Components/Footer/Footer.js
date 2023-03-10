import "./Footer.css"
import React from "react";
import { motion, spring } from "framer-motion";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <React.Fragment>
            <motion.div className="about-me-container" style={{ backgroundColor: "black" }} id="Contact" >
                <div className="footer">
                    <div className="footer_title">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="footer_mine" >
                        <motion.a drag dragConstraints={{left:10, right:10, top:0, bottom:0}} whileHover={{rotate:[0, 360]}} transition={{ type:spring, duration:0.3, bounce:5}}  href="mailto:shashankraj3636@gmail.com" rel="noopener noreferrer" target="_blank" ><GoogleIcon fontSize="large" /></motion.a>
                        <motion.a drag dragConstraints={{left:10, right:10, top:0, bottom:0}} whileHover={{rotate:[0, 360]}} transition={{ type:spring, duration:0.3, bounce:5}} target="_blank" rel="noopener noreferrer" href='https://github.com/sosenkkk' ><GitHubIcon fontSize="large" /></motion.a>
                        <motion.a drag dragConstraints={{left:10, right:10, top:0, bottom:0}} whileHover={{rotate:[0, 360]}} transition={{ type:spring, duration:0.3, bounce:5}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shashank-raj-5bb2a11b6/"><LinkedInIcon fontSize="large" /></motion.a>
                        <motion.a drag dragConstraints={{left:10, right:10, top:0, bottom:0}} whileHover={{rotate:[0, 360]}} transition={{ type:spring, duration:0.3, bounce:5}} target="_blank" rel="noopener noreferrer" href='https://twitter.com/sosenkkk' ><TwitterIcon fontSize="large" /></motion.a>
                        <motion.a drag dragConstraints={{left:10, right:10, top:0, bottom:0}} whileHover={{rotate:[0, 360]}} transition={{ type:spring, duration:0.3, bounce:5}} target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/sosenkkk/' ><InstagramIcon fontSize="large" /></motion.a>
                    </div>
                </div>
            </motion.div>
        </React.Fragment>
    );

};


export default Footer;