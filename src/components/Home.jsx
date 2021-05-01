import React from "react";
import Header from "./Header";
//import poster from "../assets/picture/poster.png";
import bandtest from "../assets/video/bandtest.mp4";
import "../style/home.scss";

const Home = () => {
    let tagline = "archivage des savoirs / transmission par l’image";
    return (
        <div className="home">
            <div className="home--header">
                <Header tagline={tagline} />
            </div>
            <div className="home--video">
                <video controls preload="auto" loop allowfullscreen muted>
                    <source src={bandtest} type="video/mp4"/>
                    <p>Cette vidéo ne peut être affichée sur votre navigateur Internet.<br/>
                    Your browser does not support the video tag.</p>
                </video>
            </div>
        </div>
    )
}

export default Home;