import React from "react";
import { UserMenu, MenuItemLink } from "react-admin";
import SettingsIcon from "@material-ui/icons/Settings";

const MyUserMenu = (props) => {
   
  return (
    <UserMenu {...props}>
      <MenuItemLink
        to="/my-profile"
        primaryText="My Profile"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
}

export default MyUserMenu
   