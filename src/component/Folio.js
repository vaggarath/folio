import React from 'react';

const Folio = ({language, toggled}) => {
    const projets = [
        {
            title:'Mon Folio',
            content:'',
            techno:['ReactJS', 'Bootstrap', 'CSS'],
            img:'./this.jpg',
            github:'https://github.com/vaggarath/folio'
        },
        {
            title:'Projet Medicis',
            content:'',
            techno:['ReactJS', 'Bootstrap', 'PHP 7.4', 'PostgreSQL'],
            img:'./medicis.jpg',
            github:'https://github.com/vaggarath/medicis'
        },
        {
            title:'Lycan',
            content:'',
            techno:['Laravel', 'OctoberCMS', 'Javascript', 'SCSS'],
            img:'./lycan.jpg',
        },
        {
            title:'DWWM',
            content:'',
            techno:['Wordpress', 'ACF', 'CSS', 'Javascript'],
            img:'./project3.JPG.jpg',
            link:'http://ecfwordpress.vag.ovh'
        },
        {
            title:'ForEach(Music){}',
            content:'',
            techno:['HTML', 'CSS', 'Javascript'],
            img:'./project4.JPG.jpg',
            link:'http://ecfjs.vag.js'
        },
        {
            title:'Space_App',
            content:'',
            techno:['NextJS', 'SCSS'],
            img:'./spaceapp.jpg',
            github:'https://github.com/vaggarath/space-app-new'
        },
        {
            title:'Des envies de saisons',
            content:'',
            techno:['Wordpress', 'CSS', 'WooCommerce'],
            img:'./envies.jpg',
        },
        {
            title:'Journées du Bénévolat',
            content:'',
            techno:['Drupal', 'PHP 5 & 7.4', 'Apache'],
            img:'./journeebenevolat.jpg',
        },
        {
            title:'Chat',
            content:'',
            techno:['ReactJS', 'TailwindCSS', 'Firebase'],
            img:'./chat_conn.jpg',
            github:'https://github.com/vaggarath/chat-demo'
        },
    ]
    return (
        <div className="container mb-5" id="folio" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="mt-5 text-center">Folio</h1>
            <ul class="grid cards mt-5">
            {
                projets.map(proj=>(
                   <li>
                    <div className="d-flex justify-content-between">
                        <h2>{proj.title}</h2>
                        {
                            proj.github
                            ? <a href={proj.github} target="_blank"><i class="fab fa-github-square"></i></a>
                            : ''
                        }
                        
                    </div>
                       
                   <img src={proj.img} alt="" className="w-100 imgzoom" />
                   <ul class="tags mt-2">
                       {
                       proj.techno.map(tech=>(
                           <li><a href="#" class="tag">{tech}</a></li>
                       ))
                       }
                    </ul>
                    </li> 
                ))
            }
            

            </ul>
        </div>
    );
};

export default Folio;