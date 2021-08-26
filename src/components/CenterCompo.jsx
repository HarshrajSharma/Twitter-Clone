import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import "./CSS/CenterCompo.css"
import Post from "./Post"
import firebase from "../firebase"


function CenterCompo() {
    
    const [postArray, setPostArray]=useState([]);

    useEffect(()=>{
        const postContentref=firebase.database().ref("TwitterPost");
        postContentref.on("value", (snapshot)=>{
            console.log(snapshot.val());
            const post=snapshot.val();
            const postList=[];
            for(let id in post){
                postList.push(post[id])
            }
            console.log(postList);
            setPostArray(postList.reverse());
            console.log(postArray);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    

    return (
        <div id="centerCompo" >

            <div className="main" >
                <div className="centerHeading" >
                    Home
                </div>
                <CreatePost/>
                {postArray.map((element)=>{
                    return(
                        <Post 
                            postContent={element.postContent} 
                            imageURI={element.postImageBase64}
                        />
                    );
                })}
            </div>
        </div>
    );
}
export default CenterCompo;