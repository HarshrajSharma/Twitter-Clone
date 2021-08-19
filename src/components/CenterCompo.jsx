import React from "react";
import CreatePost from "./CreatePost";

import "./CSS/CenterCompo.css"


function CenterCompo() {
    return (
        <div id="centerCompo" >

            <div className="main" >
                <div className="centerHeading" >
                    Home
                </div>
                <CreatePost/>
            </div>
        </div>
    );
}
export default CenterCompo;