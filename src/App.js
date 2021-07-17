import React from 'react';
import './App.css';
import Toggle from './component/Toggle';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header';
import ExperienceFr from './component/ExperienceFr';
import ExperienceEng from './component/ExperienceEng';
import About from './component/About';
import Formation from './component/Formation';
import Skills from './component/Skills';
import Folio from './component/Folio';
import Contact from './component/Contact';


function App() {

  const [toggled, setToggled] = React.useState(true);
  const [english, setEnglish] = React.useState(false);

    const handleClick = () => {
        setToggled((s) => !s);
    };

    const handleLanguage = () =>{
        setEnglish((s)=> !s)
    }


  return (
    
    <div className={toggled ? "App-night" : "App"}  style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
      
      <Header toggled={toggled} onClick={handleClick} handleLanguage={handleLanguage} language={english} />
      <About language={english} toggled={toggled} />
      {
        english
        ? <ExperienceEng language={english} toggled={toggled}/>
        : <ExperienceFr language={english} toggled={toggled}/>

      }

      <Formation language={english} toggled={toggled}/>

      <Skills language={english} toggled={toggled}/>

      <Folio language={english} toggled={toggled}/>

      <Contact language={english} toggled={toggled}/>
      

      <div className="filler"></div>
    </div>
  );
}

export default App;
