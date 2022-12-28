import React from "react";
import Modal from "./Modal";

const ModalHolder = (props) => {
    var modal = props.modalName;
    const closeModal=()=>{
        props.onClose();
    }

    return (
        <React.Fragment>
            {modal === "projects" &&
                <Modal onClose={closeModal} c
                >
                    <h2>Projects</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                   
                </Modal>
            }
            {modal === "skills" &&
                <Modal onClose={closeModal} >
                    <h2>Skills</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Modal>
            }
            {modal === "experience" &&
                <Modal onClose={closeModal} >
                    <h2>Experience</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Modal>
            }
            {modal === "achievements" &&
                <Modal onClose={closeModal} >
                    <h2>Achievements</h2>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </Modal>
            }
        </React.Fragment>
    )
}

export default ModalHolder;

