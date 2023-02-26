import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr"; // menu
import { FaUserTie  , FaUserAstronaut} from "react-icons/fa"; //  techer
import { GrMoney } from "react-icons/gr"; // earning
import { TbLayoutDashboard } from "react-icons/tb";  // dashboard
import { FaUserPlus } from "react-icons/fa";  // register
import {  FiSettings } from "react-icons/fi"; // setting 
import { MdOutlineFeedback } from "react-icons/md"; // feedback
import course from "../../images/icons8-task-100.png"

const MenuItems = ({ title, active, icon, collapseSidebar }) => {
  const val = title.toLowerCase();

  return (
    <MenuItem
      icon={icon}
      className={`${active ? "" : "text-grayDark "} font-[Roboto] `}
      component={<Link to={`/adminDashboard/${val}`} />}
     
    >
      {title}
    </MenuItem>
  );
};

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="flex h-screen   z-30  bg-white  ">
      <Sidebar>
        <Menu>
          <MenuItem
            icon={<GrMenu size={30} />}
            className="text-2xl"
            onClick={() => collapseSidebar()}
          >
            <span className="my-3">Admin</span>
          </MenuItem>
          
          <MenuItems
            title="Dashboard"
            icon={<TbLayoutDashboard />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Earning"
            icon={<GrMoney />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Register"
            icon={<FaUserPlus />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Courses"
            icon={<img src={course} className="w-[60%]" />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Teacher"
            icon={<FaUserTie />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Student"
            icon={<FaUserAstronaut />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Setting"
            icon={<FiSettings />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
          <MenuItems
            title="Feedback"
            icon={<MdOutlineFeedback />}
            active="true "
            collapseSidebar={collapseSidebar}
          />
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
