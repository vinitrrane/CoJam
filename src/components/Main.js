import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import video1 from "../assets/video/video1.mp4"
import video2 from "../assets/video/video2.mp4"
import video3 from "../assets/video/video3.mp4"
import video4 from "../assets/video/video4.mp4"
import { UserContext } from "../context/UserContext";
import Host from "./Host";


const Main = () => {

    const { screenSize, micOff, videoOff } = useContext(UserContext);
    return <>
        <div className="main-container">
            <Sidebar />
            <div className="main">
                <div className={"screen-container " + (screenSize === 1 ? "screen1" : "screen3")
                }>
                    <Video video={video1} name={"You"} class={
                        screenSize === 3 ? "screen-item3" : "screen-item1"} host={<Host />}
                        mute={micOff} videoPlaceholder={videoOff} />
                    {screenSize >= 2 ? <Video video={video2} name={"Erika"} class={"screen-item1"} /> : null}

                    {screenSize >= 3 ? <Video video={video3} name={"Betty"} class={"screen-item1"} /> : null}

                    {screenSize >= 4 ? <Video video={video4} name={"David"} class={"screen-item1"} />
                        : null}
                </div>
            </div>
        </div>
    </>
};




export default Main;
