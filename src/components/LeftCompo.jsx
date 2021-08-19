import React from "react"
import LeftCompoButton from "./LeftCompoButton";

import "./CSS/LeftCompo.css"


function LeftCompo() {
    return (
        <div id="leftCompo" >

            <div className="main" >
                <div id="logo" >
                    <i class="fab fa-twitter"></i>
                </div>

                <LeftCompoButton
                    value="Home"
                    icon="far fa-home"
                />
                <LeftCompoButton
                    value="Explore"
                    icon="far fa-hashtag"
                />
                <LeftCompoButton
                    value="Notifications"
                    icon="far fa-bell"
                />
                <LeftCompoButton
                    value="Messages"
                    icon="far fa-envelope"
                />
                <LeftCompoButton
                    value="Bookmarks"
                    icon="far fa-bookmark"
                />
                <LeftCompoButton
                    value="Lists"
                    icon="far fa-list-alt"
                />
                <LeftCompoButton
                    value="Profile"
                    icon="far fa-user"
                />
                <LeftCompoButton
                    value="More"
                    icon="far fa-ellipsis-h"
                />


            </div>
        </div>
    );
}
export default LeftCompo;