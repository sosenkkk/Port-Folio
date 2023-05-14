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
        <div style={{  display: "flex", justifyContent:"space-around", margin:"1rem 1rem 0 1rem", flexWrap:"wrap", backgroundColor:"black" }} >
            <ActionAreaCard onClick={showModal} id='projects' toDisplay="Key Projects" toDescribe="Few Projects I've done last year with everything I have learnt along the journey." todo="projects" source="https://serving.photos.photobox.com/902361465e1bbc2538d9bace84e77ae1d4903eb68afd60bfe96354889ea4cd99d41f1fd3.jpg" />
            <ActionAreaCard onClick={showModal} id='skills' toDisplay="Skills" toDescribe="Languages and frameworks I have knowledge of as well as tools I use to implement them." todo="hobby" source="https://static1.shine.com/l/m/images/blog/top_resume_skills_post_banner.png" />
            <ActionAreaCard onClick={showModal} id='achievements' toDisplay="Scholastic Achievements" toDescribe="Here are a few things I've achieved." todo="achieve" source="https://st2.depositphotos.com/6809168/10101/v/600/depositphotos_101017882-stock-illustration-winning-cup-in-his-hands.jpg" />
            <ActionAreaCard onClick={showModal} id='experience' toDisplay="Experience" toDescribe="Experience I have gathered these recent years." todo="achieve" source="https://www.aihr.com/wp-content/uploads/people-experience-cover.png" />
            {modal!=="" && <ModalHolder modalName={modal} onClose={closeModal} />}

        </div>
    );

};





export default CardHolder;
