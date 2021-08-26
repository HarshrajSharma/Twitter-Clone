import React from "react"
import "./CSS/Post.css"

function Post(props){
    return(
        <div className="post" >

            <div className="userImage" >
                <i class="fas fa-user"/>
            </div>
            <div className="mainPost" >
                <div className="userName" >
                    <a href="https://twitter.com/HarshSh50998190" target="_blank" rel="noreferrer" >Harsh Sharma <i>@HarshSh50998190</i></a>
                </div>
                <div className="postContent" >
                    <p>{props.postContent}</p>
                    <div className="postImageDiv" >
                        {props.imageURI ? <img  className="postImage" src={props.imageURI} alt="PostImage" /> : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;