import React from 'react';

const About = ({language, toggled}) => {
    return (
        <div id="about" className={"mb-5"} style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <div className="mt-5"><br/></div>
            <h1 className="text-center mt-5">{language ? "About me" : "À propos de moi"}</h1>

            
            <div className="window">
                <div className="title-bar">
                <div className="exit"></div>
                <div className="minimize"></div>
                <div className="zoom mr-2"></div>
                {language ? "About me" : "À propos de moi"}
                </div>
                <div className={toggled ? "content-night" : "content"} contenteditable>
                {
                language 
                ? "Very passionate about web development for years, I took advantage of my cessation of activity, first to upgrade myself, then I followed a CEFIM web developer and mobile web training course delivering a professional title level III, bac + 2/3" 
                : "Passionné par le développement web depuis des années, j'ai profité de ma cessation d'activité d'abord pour me remettre à niveau, puis j'ai suivis une formation du CEFIM de développeur web et web mobile délivrant un titre professionnel niv III, bac + 2/3"
                }
                </div>
                
            </div>
            
            
        </div>
    );
};

export default About;