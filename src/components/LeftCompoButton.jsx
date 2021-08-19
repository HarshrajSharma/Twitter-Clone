import React from "react"
import "./CSS/LeftCompoButton.css"


function LeftCompoButton(props){
    return(
        <div className="sideButton"  >
            
            <i class={props.icon}> {props.value}</i>
        </div>
    );
}
export default LeftCompoButton;