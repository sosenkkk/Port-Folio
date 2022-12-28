import React from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";
import "./ModuleHolder.css"

const ModalHolder = (props) => {
    var modal = props.modalName;
   
    const closeModal=()=>{
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
                        
                        
                        
                        
                        
                    </ul>
                </Modal>
            }
        </React.Fragment>
    )
}

export default ModalHolder;

