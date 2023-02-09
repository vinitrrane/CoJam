import React, { useState } from "react";
import Topbar from "./Topbar";
import Main from "./Main";
import Bottombar from "./Bottombar";
import { UserContext } from "../context/UserContext";


const Home = () => {

    const [screenSize, setScreenSize] = useState(1)
    const [micOff, setMicOff] = useState(false)
    const [videoOff, setVideoOff] = useState(false)


    return <>
        <UserContext.Provider value={{ screenSize, setScreenSize, micOff, setMicOff, videoOff, setVideoOff }}>
            <div className="container">
                <Topbar />
                <Main />
                <Bottombar />
            </div>
        </UserContext.Provider>
    </>
};

export default Home;
