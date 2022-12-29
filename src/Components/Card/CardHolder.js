import { useState } from "react";
import ActionAreaCard from "./CardComponent";
import React from 'react';
import ModalHolder from "../Modal/ModalHolder";

const CardHolder = () => {
    const [modal, setmodal] = useState("");
    
    const showModal=(item)=>{
        setmodal(item);
    }
    const closeModal=()=>{
        setmodal('');
    }
    return (
        <div style={{  display: "flex", justifyContent:"space-around", margin:"1rem", flexWrap:"wrap", backgroundColor:"black" }} >
            <ActionAreaCard onClick={showModal} id='projects' toDisplay="Projects" toDescribe="Few Projects I've done last year with everything I have learnt along the journey." todo="projects" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard onClick={showModal} id='skills' toDisplay="Skills" toDescribe="Languages and frameworks I have knowledge of as well as tools I use to implement them." todo="hobby" source="https://i.pinimg.com/originals/59/87/1c/59871c7fb4ca4d906e9ef1f4566cd378.gif" />
            <ActionAreaCard onClick={showModal} id='achievements' toDisplay="Scholastic Achievements" toDescribe="Here are a few things I've achieved." todo="achieve" source="https://i.pinimg.com/originals/a6/53/12/a653125902cbc01ad4f1198d33aadfc6.gif" />
            <ActionAreaCard onClick={showModal} id='experience' toDisplay="Experience" toDescribe="Experience I have gathered these recent years." todo="achieve" source="https://i.pinimg.com/originals/45/37/51/453751923f6508c5315a0d22ff335673.gif" />
            {modal!=="" && <ModalHolder modalName={modal} onClose={closeModal} />}

        </div>
    );

};

export default CardHolder;
