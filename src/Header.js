import React from "react";
import "./Header.css";
import Logo from "./tinder__logo.png";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header___icon" />
            </IconButton>
            <img className="header__logo" src={Logo} alt="logo" />
            <IconButton>
                <ForumIcon fontSize="large" className="header___icon" />
            </IconButton>
        </div>
    );
}

export default Header;
