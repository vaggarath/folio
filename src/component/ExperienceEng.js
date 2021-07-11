import React from 'react';
import { Chrono } from "react-chrono";
import {itemseng} from "./ExperiencesEng";

const ExperienceEng = ({language, toggled}) => {

    return (
        
        <div className="container" id="exp" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="text-center mt-5">{language ? "Experiences" : "Expériences"}</h1>
            <div style={{ width: "100%"}}>
               <Chrono items={itemseng} mode="VERTICAL_ALTERNATING" hideControls={true}/>     
            </div>
        </div>
    );
};

export default ExperienceEng;