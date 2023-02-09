import React from "react";
import muteIcon from "../assets/img/mute.svg"
import videOffIcon from "../assets/img/videooff.svg"
import videoOffImg from "../assets/img/placeholder-profile.jpg"

const video = (props) => {

    return <div className={props.class}>
        {!props.videoPlaceholder ?
            <video autoPlay loop muted >
                <source src={props.video} type="video/mp4" /> </video> : <img src={videoOffImg} alt="" />}
        {props.host}
        <div className="hostname-conatiner">
            <p>{props.name}</p>
        </div>
        <div className="control-icons-container">
            {props.mute ? <div className="mute-icon control-icons">
                <img src={muteIcon} alt="" />
            </div> : null}
            {props.videoPlaceholder ? <div className="control-icons videooff-icon ">
                <img src={videOffIcon} alt="" />
            </div> : null}
        </div>


    </div>
};

export default video;
