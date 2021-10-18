import React from "react";
import classes from './Sidebar.module.css';
const Sidebar = () => {
    return (
        <nav className={classes.sidebar}>
            <div className={classes.sidebar_item}>
                <a>Profile</a>
            </div>
            <div >
                <a>Messages</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <br/>
            <div>
                <a>Settings</a>
            </div>

        </nav>
    )
}

export default Sidebar;