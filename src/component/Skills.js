import React from 'react';
import { RadarChart } from './chart/RadarChart';
import {SoftChart} from './chart/SoftChart'

const Skills = ({language, toggled}) => {
    return (
        <div className="mt-5 " id="skills" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="text-center mt-5 mb-5">{language ? "Skills" : "Compétences"}</h1>
            <div className="d-flex flex-xl-row flex-column justify-content-around">
                <RadarChart />
                <SoftChart language={language}/>
            </div>
        </div>
    );
};

export default Skills;