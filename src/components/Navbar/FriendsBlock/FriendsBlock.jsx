import React from "react";
import classes from './FriendsBlock.module.css';
import Friend from "./Friend/Friend";

const FriendsBlock = (props) => {
    return(<div className={classes.friendsBlock}>
        <h3 className={classes.title}>Friends</h3>
        <div className={classes.friendsRow}>
            <Friend/>
            <Friend/>
            <Friend/>
        </div>
    </div>)
}

export default FriendsBlock;
