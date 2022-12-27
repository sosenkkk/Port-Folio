import ActionAreaCard from "./CardComponent";
import * as React from 'react';

const CardHolder = () => {

    return (
        <div style={{  display: "flex", justifyContent:"space-around", flexWrap:"wrap", backgroundColor:"black" }} >
            <ActionAreaCard toDisplay="Projects" toDescribe="All i have done is nothing" todo="projects" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard toDisplay="Skills" toDescribe="All i have done is nothing" todo="hobby" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard toDisplay="Experience" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard toDisplay="Achievements" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
        </div>
    );

};

export default CardHolder;