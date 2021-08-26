import React from "react"
import "./CSS/RightCompo.css"


function RightCompo() {
    return (
        <div id="rightCompo" >
            <div className="main" >
                <div className="searchBar" ><input placeholder="Search Twitter" /></div>
                <div className="global" >
                    <h2>What's Happening</h2>
                </div>
            </div>
        </div>
    );
}
export default RightCompo;