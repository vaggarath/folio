import React from 'react';
import { Chrono } from "react-chrono";

const Formation = ({language, toggled}) => {

    const formations = [
        {
            title: language ? "Professional title web and mobile web developer - bac+2/3" : "Titre professionnel développeur web et web mobile",
            year: "2020"
          },
          {
            title: "RGPD",
            year:'2020'
            
          },
          {
            title: "MOOC ANSSI - SecNum",
            year:"2020"
           
          },
          {
            title: language ? "Literary Baccalaureate" : "Baccalauréat L",
            subtitle: language ? "English & japanese specialty" : "Spécialité Anglais, Japonais",
            year:'2003'
           
          },
    ]
    return (
        <div className="container my-auto" id="formation" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="text-center mb-5 mt-5">{language ? "Education" : "Formations"}</h1>
            <div className="d-flex flex-xl-row flex-column justify-content-between">
            {
                formations.map(form=>(
                    <div class="element element-2 d-flex flex-column mx-auto mb-5">
                        <h5 className="text-center">{form.title}</h5>
                        <h6 className="font-italic">{form.year}</h6>
                        {
                            form.subtitle ? <h6 className="font-italic">{form.subtitle}</h6> : ""
                        }
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Formation;