import React, { useEffect, useState } from 'react';
import { RadarChart } from './chart/RadarChart';
import {SoftChart} from './chart/SoftChart'
import Bars from './chart/Bars'

const Skills = ({language, toggled}) => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
  
      const useWindowDimensions = () => {
        const [windowDimensions, setWindowDimensions] = useState(
          getWindowDimensions()
        );
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
        return windowDimensions;
      }
  
      const { height, width } = useWindowDimensions();
    return (
        <div className="mt-5 " id="skills" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="text-center mt-5 mb-5">{language ? "Skills" : "Compétences"}</h1>
            <div className="d-flex flex-xl-row flex-column justify-content-around">
                 {
                     width > 1000
                     ? <>
                        <RadarChart />
                        <SoftChart language={language}/>
                     </>
                     : <Bars />
                 }
                
            </div>
        </div>
    );
};

export default Skills;