import React from "react";
import Header from "./Header";
import "../style/service.scss";

let content = [<main><h3>Exemple de service :</h3><br/>
<p>comment rendre compte d’un travail intelectuel, des process engagé</p><br/><br/><br/>
<ul>
    <li>communication interne des entreprises vidéo, podcasts, supports pédagogiques</li>
    <li>ARCHIVAGE DES SAVOIRS</li>
    <li>TRANSMISSION PAR L’IMAGE</li>
</ul><br/>
<p>consulting image, identité développement et stratégie brand content</p><br/>
<p>- SAUVEGARDE DU GESTE</p><br/>
<p>storytelling advisor</p>
<p>direction artistique</p>
</main>];

const Service = () => {
    return (
        <div className="service" id="wrapper">
            <Header />
            {content}
        </div>
    )
}

export default Service;