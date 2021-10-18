import React from "react";
import classes from './Profile_Content.module.css';

const Profile = () =>{
    return (
        <div className={classes.content}>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnq3Yn4-7rkvmYyB3D_FROTOqXY2QS1m8bBw&usqp=CAU" />
            </div>
            <div>
                Aava+ descript
            </div>
            <div>
                Posts
                <div>My posts
                    <div>New post</div>
                </div>
                <div>posts 1 ..</div>
            </div>
        </div>
    )
}

export default Profile;