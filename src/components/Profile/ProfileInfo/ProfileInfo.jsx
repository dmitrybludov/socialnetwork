import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div>
            <div>
                <img src='https://img3.stockfresh.com/files/r/rastudio/m/91/9962218_stock-vector-social-networks-promotion-concept-banner-header.jpg' alt="banner"/>
            </div>
            <div className={classes.descriptionBlock}>
                Ava + desc
                <img src='https://www.bootdey.com/img/Content/avatar/avatar7.png' alt="user photo"/>
            </div>
        </div>
    )
}

export default ProfileInfo;
