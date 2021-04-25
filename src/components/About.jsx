import React from "react";
//import Authors from "./Authors";
import Portrait from "./Portrait";
import Header from "./Header";
import fannie from "../assets/picture/fannie.jpg";
import jeremie from "../assets/picture/jeremie.jpg";
import "../style/about.scss";

let text = [<p>Après une rencontre sur les bancs des Ateliers Varan, nos projets documentaires en développement,
    nous avons décidé de nous associer pour mettre en place une activité audiovisuelle qui nous ressemble.<br/><br/>
    De l’art contemporain en passant par la sociologie à la réalisation cinématographique, nos
    domaines de compétences nous permettent d’avoir un regard étendu et singulier sur vos projets de
    communications audiovisuels.<br/>
    Nous avons voulu mettre à profit le champs élargi de nos compétences au service d’une certaine idée
    de l’image et du sonore, loin des clichés survitaminés des filmmakers actuels aux images vides de sens.<br/><br/>
    La contenante <i>archive des savoirs</i> et <i>sauvegarde des gestes</i> est la plus value de notre approche. Nous
    pensons qu’il est essentiel aujourd’hui de porter attention au quotidien des travailleurs et la minutie
    de leurs activités pour que nous puissions garder ces traces en vu de leurs transmissions.</p>];

let datas = [
    { id:1, title:"FANNIE PLESSIS", description: "portrait de Fannie Plessie", picture: fannie, caption: [<p>Fannie Plessis est réalisatrice et sociologue. Elle vit et travaille à Paris. Formée en Sciences Humaines à la Sorbone, elle a travaillé à l’Institut National d’Etudes Démographiques - <a target="_blank" href="https://www.ined.fr/">INED</a> - avant de se consacrer à la réalisation de documentaires et de films de fiction.</p>]},
    { id:2, title:"JÉRÉMIE GAULIN", description: "portrait de Jérémie Gaulin", picture: jeremie, caption: [<p>Jérémie Gaulin est artiste plasticien, videaste, conférencier et redacteur de publication. Il vit et travaille à Paris. Après un Master à la Haute École d’Art et Design de Genève - <a target="_blank" href="https://www.hesge.ch/head/">HEAD</a> - il menera de front une pratique artistique (soutenu par la Galerie Martine Aboucaya) et une production théorique - notamment avec la mise en place d’un laboratoire de recherche indépendant: <span>Chrématistique</span>.</p>]},
];


const About = () => {
    return (
        <div className="about" id="wrapper">
            <div className="about--heading"><Header /></div>
            <div className="about--paragraph-subtitle"><h2>rencontre.&ensp;</h2></div>
            <div className="about--paragraph-text">{text}</div>
            <div className="about--portrait">
                {datas.map((author) => (
                <Portrait key={author.id} title={author.title} caption={author.caption} picture={author.picture} description={author.description}/>
                ))}
            </div>
        </div>
            
    )
}

export default About;