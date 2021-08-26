import React, { useState } from "react";
import "./CSS/CreatePost.css"

import firebase from "../firebase"


function CreatePost() {
    const [postContent, setPostContent] = useState("");
    const [postImageBase64, setPostImageBase64] = useState("");

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    })
    function handleFileChange(e) {

        console.log(e.target.files[0]);
        const uploadedFile = e.target.files[0];
        toBase64(uploadedFile)
            .then((res) => {
                // console.log(res)
                setPostImageBase64(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleChange(e) {
        setPostContent(e.target.value);
    }
    function handleClick(e) {

        e.preventDefault();
        // alert(postContent)
        const postContentRef = firebase.database().ref("TwitterPost");
        const post = {
            postContent,
            postImageBase64,
        }
        if (postContent || postImageBase64 !== "") {
            postContentRef.push(post);
        }
        setPostContent("");
        setPostImageBase64("");

        document.getElementById("file-input").value="";
    }
    return (

        <form style={{ margin: "none", border: "none" }} >
            <div id="createPost" >
                <div className="top">
                    <i class="fas fa-user" />
                    <textarea

                        placeholder="What's happening?"
                        onChange={handleChange}
                        value={postContent}
                        maxLength="280"
                        required
                    />
                </div>
                <div className="bottom" >

                    <label for="file-input">
                        <i class="far fa-image" />
                    </label>
                    <input id="file-input" type="file" accept="image/*" onChange={handleFileChange} />
                    
                    <button onClick={handleClick} >Tweet</button>
                </div>
            </div>
        </form>
    )
}
export default CreatePost;