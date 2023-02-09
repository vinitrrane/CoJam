import React, { useState, useEffect } from "react";
import statusIcon from "../assets/img/statusicon.svg"
import tempoPlus from "../assets/img/tempoplus.svg"
import tempoMinus from "../assets/img/tempominus.svg"
import recordButton from "../assets/img/record.svg"

const Status = () => {
    const [tempo, setTempo] = useState(120);
    const [beat, setBeat] = useState(1);
    const [bar, setBar] = useState(1);
    const [statusButton, setStatusButton] = useState(false);

    useEffect(() => {
        let timer = null;
        timer = setInterval(
            () => {
                setBeat(beat + 1);

                if (beat === 4) {
                    setBar(bar + 1);
                    setBeat(1);
                }

            }, 1000)
        return () => clearInterval(timer)
    }
    )
    return <div className="status">
        <div className="status-container">
            <div className="status-button" >
                <button onClick={() => setStatusButton(!statusButton)}
                    className={statusButton ? "status-button-on" : null}>
                    <img src={statusIcon} alt="statusIcon" className={statusButton ? "status-button-img-on" : null} />
                </button>
            </div>
            <div className="status-bar">
                <h4>0{bar >= 100 ? null : 0}{bar >= 10 ? null : 0}<span>{bar}</span></h4>
                <p>Bar</p>
            </div>
            <div className=" status-beat">
                <h4>{beat}</h4>
                <p>Beat</p>
            </div>
            <div className="status-tempo">
                <div className="status-tempo-control"> <button onClick={tempo > 114 ? () => setTempo(tempo - 1) : null}><img src={tempoMinus} alt="minusIcon" /></button>
                    <h4>{tempo}</h4>
                    <button onClick={tempo < 127 ? () => setTempo(tempo + 1) : null} ><img src={tempoPlus} alt="plusIcon" /></button></div>
                <p>Tempo</p>
            </div>
            <div className="status-cmaj">
                <h4>4/4</h4>
                <p>Cmaj</p>
            </div>
        </div>
        <div className="record-button">
            <button>
                <img src={recordButton} alt="record" />
            </button>
        </div>
    </div>

};

export default Status;
