import React from 'react';

const Contact = ({language, toggled}) => {
    return (
        <div id="contact" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="text-center">{language ? "My contact informations" : "Mes informations de contact"}</h1>
            <div className="container mt-5 mb-5 d-flex justify-content-around contact">
                <a href="mailto:jchambon@gmail.com"><i class="fas fa-envelope-open-text" style={toggled ? {backgroundColor: ''} : {color:'black'}}></i></a>
                <a href="https://www.linkedin.com/in/julien-chambon-957b77168/" target="_blank"><i class="fab fa-linkedin"  style={toggled ? {backgroundColor: ''} : {color:'black'}}></i></a>
                <a href="https://github.com/vaggarath" target="_blank"><i class="fab fa-github-square"  style={toggled ? {backgroundColor: ''} : {color:'black'}}></i></a>
            </div>
        </div>
    );
};

export default Contact;