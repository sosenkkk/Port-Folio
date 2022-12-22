import ActionAreaCard from "./CardComponent";
import * as React from 'react';

const CardHolder = () => {

    return (
        <div style={{  display: "flex", justifyContent:"space-around", flexWrap:"wrap" }} >
            <ActionAreaCard toDisplay="Projects" toDescribe="All i have done is nothing" todo="projects" source="https://i.pinimg.com/originals/97/ae/28/97ae288bc10481a0152460e9a3c5faeb.gif" />
            <ActionAreaCard toDisplay="Skills" toDescribe="All i have done is nothing" todo="hobby" source="https://miro.medium.com/max/828/1*zlmwtg3fog11YXcU_rvfWA.gif" />
            <ActionAreaCard toDisplay="Experience" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/16/09/4c/16094cb99d80898457d02c0658b2b6c9.gif" />
            <ActionAreaCard toDisplay="Achievements" toDescribe="All i have done is nothing" todo="achieve" source="https://i.pinimg.com/originals/88/40/b8/8840b8d2c07bf805cdab22c0e4b54f59.gif" />
        </div>
    );

};

export default CardHolder;