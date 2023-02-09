import React from "react";


import Control from "./Control";
import Status from "./Status";

const Bottombar = () => {
    return <>
        <div className="bottom-bar">

            <Status />
            <Control />
        </div>
    </>
};

export default Bottombar;
