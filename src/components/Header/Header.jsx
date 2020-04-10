import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return(
        <header className={classes.header}>
            <img src='https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/8575147831553750379-256.png' alt="react"/>
        </header>
    )
}

export default Header;
