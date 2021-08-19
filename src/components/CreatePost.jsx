import React from "react";
import "./CSS/CreatePost.css"


function CreatePost() {
    return (
        <div id="createPost" >
            <div className="top">
                <i class="fas fa-user"/>
                <input placeholder="What's happening?" />
            </div>
            <div className="bottom" >
                <button>Tweet</button>
            </div>
        </div>
    )
}
export default CreatePost;