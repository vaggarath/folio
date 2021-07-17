import React from "react";

export default function Toggle({ handleLanguage, language }) {
    return (
        <div className="d-flex mx-auto">
            <img src={language ? "./fr.jpg" : "./uk.jpg"} alt="english-flag" class="flag" onClick={handleLanguage} />
        </div>
    );
}