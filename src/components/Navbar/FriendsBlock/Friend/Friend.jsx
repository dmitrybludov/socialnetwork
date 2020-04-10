import React from "react";
import classes from './Friend.module.css';

const Friend = (props) => {
    return(<div>
        <div>
            <img
                className={classes.userPhoto}
                src="https://www.bootdey.com/img/Content/avatar/avatar7.png"
                alt="user photo"/>
        </div>
        <div>
            Name
        </div>
    </div>)
}

export default Friend;
