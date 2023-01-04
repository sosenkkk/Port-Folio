import "./Footer.css"
import React from "react";
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {

    return (
        <React.Fragment>
            <div className="about-me-container" style={{ backgroundColor: "black" }} >
                <div className="footer">
                    <div className="footer_title">
                        <h2>Contact Me</h2>
                    </div>
                    <div className="footer_mine" >
                        <a href="mailto:shashankraj3636@gmail.com" rel="noopener noreferrer" target="_blank" ><GoogleIcon fontSize="large" /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/sosenkkk' ><GitHubIcon fontSize="large" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/shashank-raj-5bb2a11b6/"><LinkedInIcon fontSize="large" /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/sosenkkk' ><TwitterIcon fontSize="large" /></a>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/sosenkkk/' ><InstagramIcon fontSize="large" /></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

};


export default Footer;