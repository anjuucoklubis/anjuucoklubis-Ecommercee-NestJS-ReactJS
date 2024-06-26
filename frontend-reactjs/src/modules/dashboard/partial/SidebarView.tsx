import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Category from "@mui/icons-material/Category";
import Inventory from "@mui/icons-material/Inventory";
import Discount from "@mui/icons-material/Discount";

import { Link } from "react-router-dom";

const SidebarView = () => {
  return (
    <Sidebar style={{ height: "100vh" }}>
      <Menu>
        <MenuItem icon={<MenuOutlinedIcon />} style={{ textAlign: "center" }}>
          <h2>Admin</h2>
        </MenuItem>
        <SubMenu
          title="Manage User"
          label="Manage User"
          icon={<PeopleOutlinedIcon />}
        >
          <MenuItem icon={<AccountCircleIcon />}>
            <Link to="/admin/manageuser-account">Account</Link>
          </MenuItem>
          <MenuItem icon={<VerifiedUserIcon />}>
            <Link to="/admin/manageuser-role">Role</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          title="Manage Product"
          label="Manage Product"
          icon={<Inventory />}
        >
          <MenuItem icon={<Inventory />}>
            <Link to="/admin/manageproduct-product">Product</Link>
          </MenuItem>
          <MenuItem icon={<Category />}>
            <Link to="/admin/manageproduct-categoryproduct">
              Category Product
            </Link>
          </MenuItem>
          <MenuItem icon={<Discount />}>
            <Link to="/admin/manageproduct-discountproduct">
              Discount Product
            </Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarView;
