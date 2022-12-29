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
        <div style={{  display: "flex", justifyContent:"space-around", flexWrap:"wrap", backgroundColor:"black" }} >
            <ActionAreaCard onClick={showModal} id='projects' toDisplay="Projects" toDescribe="All i have done is nothing" todo="projects" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard onClick={showModal} id='skills' toDisplay="Skills" toDescribe="All i have done is nothing" todo="hobby" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard onClick={showModal} id='experience' toDisplay="Experience" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard onClick={showModal} id='achievements' toDisplay="Achievements" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            {modal!=="" && <ModalHolder modalName={modal} onClose={closeModal} />}

        </div>
    );

};

export default CardHolder;
