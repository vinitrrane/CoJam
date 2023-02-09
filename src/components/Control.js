import React, { useContext } from "react";
import controOption from "../assets/img/controloption.svg"
import micButton from "../assets/img/mute.svg"
import videoButton from "../assets/img/videooff.svg"
import volumeButton from "../assets/img/audiooff.svg"
import optionButton from "../assets/img/otheroptions.svg"
import { UserContext } from "../context/UserContext";

const Control = () => {

    const { micOff, setMicOff, videoOff, setVideoOff } = useContext(UserContext);

    console.log(micOff);
    return <div className="control-container">
        <div className="end-button">
            <button>End Jam</button>
        </div>
        <div className="mute-button sm-button">
            <div className="sm-button-group">
                <button onClick={() => setMicOff(!micOff)}>
                    <img src={micButton} alt="micOff" />
                </button>
                <button>
                    <img src={controOption} alt="control-option" className="control-option" />
                </button>
            </div>

        </div>
        <div className="video-off-button sm-button">
            <div className="sm-button-group">
                <button onClick={() => setVideoOff(!videoOff)}>
                    <img src={videoButton} alt="videoOff" />
                </button>
                <button>
                    <img src={controOption} alt="control-option" className="control-option" />
                </button>
            </div>
        </div>
        <div className="volume-button sm-button">
            <div className="sm-button-group">
                <button>
                    <img src={volumeButton} alt="volume" />
                </button>
                <button>
                    <img src={controOption} alt="control-option" className="control-option" />
                </button>
            </div>
        </div>
        <div className="change-button sm-button">
            <div className="sm-button-group">
                <button>
                    <img src={optionButton} alt="options" />
                </button>
                <button>
                    <img src={controOption} alt="control-option" className="control-option" />
                </button>
            </div>
        </div>
    </div>
};

export default Control;
