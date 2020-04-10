import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img src='https://www.bootdey.com/img/Content/avatar/avatar7.png' alt="photo"/>
            {props.message}
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    )
}

export default Post;
