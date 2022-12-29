import React from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";
import "./ModuleHolder.css"
import { DiJava } from 'react-icons/di'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import {FaBootstrap } from 'react-icons/fa'
import GitHub from "@mui/icons-material/GitHub";
import {SiJavascript } from 'react-icons/si'
import {SiJquery } from 'react-icons/si'
import {SiVisualstudiocode } from 'react-icons/si'
import {SiIntellijidea} from 'react-icons/si'


const ModalHolder = (props) => {
    var modal = props.modalName;

    const closeModal = () => {
        props.onClose();
    }

    return (
        <React.Fragment>
            {modal === "projects" &&
                <Modal onClose={closeModal}
                >
                    <h2 className="title_name" >Projects</h2>
                    <ul>
                        <CartItem id="1" title="Food Order App" describe="An app allows you to order food." />
                        <CartItem id="2" title="Expense Handler" describe="Allows you to handle expenses." />
                        <CartItem id="3" title="Typo Application" describe="Type writer application." />
                        <CartItem id="4" title="Calculator App" describe="Themed Calculator" />
                        <CartItem id="5" title="Netwiz" describe="ISP website." />

                   
                    </ul>  
                </Modal>
            }
            {modal === "skills" &&
                <Modal onClose={closeModal} >
                    <h2 className="title_name" >Skills</h2>
                    <div className="skill_container" >
                        <div className="skill_item">
                            <h3>Languages</h3>
                            <ul>
                                <li> <img alt="c" src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"/> C</li>
                                <li><DiJava /> Java</li>
                                <li><FaHtml5 />HTML</li>
                                <li><FaCss3 /> CSS</li>
                                <li> <SiJavascript/> JavaScript</li>
                            </ul>
                        </div>
                        <div className="skill_item">
                            <h3>Frameworks</h3>
                            <ul>
                                <li><FaReact/> React Js</li>
                                <li><DiJava /> JavaFx</li>
                                <li><FaBootstrap/> BootStrap</li>
                                <li><SiJquery/> JQuery</li>
                            </ul>
                        </div>
                        
                        <div className="skill_item">
                            <h3>Tools</h3>
                            <ul>
                                <li> <SiVisualstudiocode />Vs Code</li>
                                <li> <SiIntellijidea />Intellij</li>
                                <li><GitHub />GitHub</li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            }
            {modal === "experience" &&
                <Modal onClose={closeModal} >
                    <h2 className="title_name" >Experience</h2>
                    <ul>
                    </ul>
                </Modal>
            }
            {modal === "achievements" &&
                <Modal onClose={closeModal} >
                    <h2 className="title_name" >Achievements</h2>
                    <ul>
                        <li>Filhal toh kucho nahi hai!!</li>
                    </ul>
                </Modal>
            }
        </React.Fragment>
    )
}

export default ModalHolder;

