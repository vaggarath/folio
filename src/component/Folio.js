import React from 'react';

const Folio = ({language, toggled}) => {
    const projets = [
        {
            title:'Mon Folio',
            content:'',
            techno:['ReactJS', 'Bootstrap', 'CSS'],
            img:'./this.jpg',
        },
        {
            title:'Projet Medicis',
            content:'',
            techno:['ReactJS', 'Bootstrap', 'PHP 7.4', 'PostgreSQL'],
            img:'./medicis.jpg',
        },
        {
            title:'Lycan',
            content:'',
            techno:['Laravel', 'OctoberCMS', 'Javascript', 'SCSS'],
            img:'./lycan.jpg',
        },
        {
            title:'ForEach(Music){}',
            content:'',
            techno:['Wordpress', 'ACF', 'CSS', 'Javascript'],
            img:'./project3.JPG.jpg',
        },
        {
            title:'ForEach(Music){}',
            content:'',
            techno:['HTML', 'CSS', 'Javascript'],
            img:'./project4.JPG.jpg',
        },
        {
            title:'Space_App',
            content:'',
            techno:['NextJS', 'SCSS'],
            img:'./spaceapp.jpg',
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
        },
    ]
    return (
        <div className="container mb-5" id="folio" style={toggled ? {backgroundColor: ''} : {backgroundColor: 'white', color:'black'}}>
            <h1 className="mt-5 text-center">Folio</h1>
            <ul class="grid cards mt-5">
            {
                projets.map(proj=>(
                   <li><h2>{proj.title}</h2>
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