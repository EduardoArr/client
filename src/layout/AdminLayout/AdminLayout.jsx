import React from "react";
import { Icon } from "../../assets";
import { AdminMenu } from "../../components/admin/AdminLayout";
import { Logout } from "../../components/admin/AdminLayout/Logout/Logout";
import "./AdminLayout.scss";

export const AdminLayout = (props) => {
  const { children } = props;
  return (
    <>
      <div className="admin-layout">
        <div className="admin-layout__left">
          <Icon.LogoWhite className="logo" />
          <AdminMenu />
        </div>
        <div className="admin-layout__right">
          <div className="admin-layout__right-header">
            <Logout />
          </div>
          <div className="admin-layout__right-content">{children}</div>
        </div>
      </div>
    </>
  );
};
