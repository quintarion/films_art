import React from "react";
import "../style/portrait.scss";

const Portrait = (props) => {
    return (
        <div className="portrait">   
            <div className="portrait--text">
                <h2>{props.title}</h2>
                {props.caption}
            </div>
            <figure className="portrait--picture">
                <img src={props.picture} alt={props.description}/>
            </figure>
        </div>
    )
}

export default Portrait;