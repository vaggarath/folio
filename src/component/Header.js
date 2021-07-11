import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Toggle from './Toggle';
import Language from './Language'


const Header = ({ toggled, onClick, handleLanguage, language }) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg={toggled ? "dark" : "light"} variant={toggled ? "dark" : "light"} fixed="top">
            
            <Navbar.Brand href="#home" id="home">Chambon Julien</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={language ? "./Eng_Resume_web_developer_Chambon_Julien CV.pdf" : "./CV_Chambon_Julien_Dev_Web.pdf"} target="_blank">
                        {language ? "Download my Resume" : "Télécharger mon CV"}
                    </Nav.Link>
                    <Nav.Link href="#about">{language ? "About me" : "À propos"}</Nav.Link>
                    <Nav.Link href="#exp">{language ? "Experiences" : "Expériences"}</Nav.Link>
                    <Nav.Link href="#formation">{language ? "Education" : "Formation"}</Nav.Link>
                    <Nav.Link href="#skills">{language ? "Skills" : "Compétences"}</Nav.Link>
                    <Nav.Link href="#folio">Folio</Nav.Link>
                    <Nav.Link href="#contact">{language ? "Contact me" : "Contactez-moi"}</Nav.Link>
                   
                </Nav>
                
                     <Container>
                        <Toggle toggled={toggled} onClick={onClick}/>
                        <Language handleLanguage={handleLanguage} language={language} />
                    </Container>
                
                
            </Navbar.Collapse>
            
            </Navbar>
        </div>
    );
};

export default Header;