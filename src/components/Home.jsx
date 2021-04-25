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
                {/* <textarea></textarea> */}
                <video src={bandtest} controls preload="auto" loop allowfullscreen>
                <p>La vidéo n'est pas lue par votre navigateur.</p>
                </video>
            </div>
        </div>
    )
}

export default Home;