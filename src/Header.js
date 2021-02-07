import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { userValue } from "./Context";
const Header = () => {
  //const user = null;
  const { user, login } = userValue();

  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Nayan" src={user.photoURL} />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Here..." />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};
export default Header;
