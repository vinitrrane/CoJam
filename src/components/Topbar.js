import React, { useState, useContext } from "react";
import logo from "../assets/img/logo.png"
import dropdownIcon from "../assets/img/down.svg"
import inviteIcon from "../assets/img/invite.svg"
import { UserContext } from "../context/UserContext";

const Topbar = () => {

    const [dropDown, setDropDown] = useState(false);
    const { setScreenSize } = useContext(UserContext);


    const screenFit = (e) => {
        setScreenSize(Number(e.target.innerHTML))
    }

    return <>
        <div className="top-bar">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
            <div className="text-container">
                <p>Friday Night Jam</p>
            </div>
            <div className="dropdown-container">
                <button onClick={() => setDropDown(!dropDown)}>
                    <img src={dropdownIcon} alt="dropdown-icon" />
                </button>
                {dropDown ?
                    <div className="dropdown-menu">
                        <button onClick={(e) => screenFit(e)}>1</button>
                        <button onClick={(e) => screenFit(e)}>2</button>
                        <button onClick={(e) => screenFit(e)}>3</button>
                        <button onClick={(e) => screenFit(e)}>4</button>
                    </div> : null}
            </div>

            <div className="invite-container">
                <button>
                    <div className="inner-invite">
                        <img src={inviteIcon} alt="invite-icon" />
                        <p>Invite</p>
                    </div>
                </button>
            </div>
        </div>
    </>
};

export default Topbar;
