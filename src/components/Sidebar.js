import React from "react";
import activeSide from "../assets/img/activeside.svg"
import videoCall from "../assets/img/videocall.svg"
import sideMenu from "../assets/img/sidemenu.svg"

const Sidebar = () => {
    return <>
        <img src={activeSide} alt="activeside" className="sidebaricon" />
        <div className="side-container">
            <div className="side">
                <div className="side-button">
                    <button>
                        <img src={videoCall} alt="activeside" />
                    </button>
                </div>
                <div className="side-button">
                    <button>
                        <img src={sideMenu} alt="activeside" />
                    </button>
                </div>

            </div>
        </div>
    </>

}

export default Sidebar;
