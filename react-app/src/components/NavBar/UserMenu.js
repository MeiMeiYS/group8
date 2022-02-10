import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserMenu.css";
import LogoutButton from "../auth/LogoutButton";

const UserMenu = ({ showUserMenu, setShowUserMenu }) => {
  const username = useSelector((state) => state.session?.user?.username);

  // const dropDownMenu = useRef(null);
  // const profileBtn = useRef(null);
  // const settingBtn = useRef(null);

  // useEffect(() => {
  //   //vvv if menu is closed, return
  //   if (!showUserMenu) return;

  //   //vvv if menu is opened, attached event listener
  //   const closeMenu = (e) => {
  //     // console.log("e.target", e.target);
  //     // console.log("dropDownMenu", dropDownMenu);
  //     // console.log("profileBtn", profileBtn);
  //     // console.log("settingBtn", settingBtn);
  //     // if click outside of the dropdown menu, the menu will close
  //     // if click outside of the dropdown menu, the menu will close
  //     // if click outside of the dropdown menu, the menu will close
  //     // if (!dropDownMenu?.current.contains(e.target)) {
  //     //   // setShowUserMenu(false);
  //     // }
  //     // if click on button in downdown menu, the menu will close
  //     if (profileBtn?.current == e.target || settingBtn?.current == e.target) {
  //       setShowUserMenu(false);
  //     }
  //   };
  //   document.addEventListener("click", closeMenu);

  //   //vvv clean up function to remove event listener
  //   return () => document.removeEventListener("click", closeMenu);
  // }, [showUserMenu]);
  const handleMDown = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    setShowUserMenu(false);
  };
  return (
    <div
      className={`user-drop-down ${showUserMenu && "user-drop-down-open"}`}
      // ref={dropDownMenu}
    >
      <div id="user-drop-down-arrow"></div>
      <div>
        <NavLink
          onMouseDown={handleMDown}
          onClick={handleClick}
          exact
          to={`/${username}`}
          // ref={profileBtn}
        >
          <svg
            aria-label="Profile"
            color="#262626"
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <circle
              cx="12.004"
              cy="12.004"
              fill="none"
              r="10.5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></circle>
            <path
              d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.006"
              cy="9.718"
              fill="none"
              r="4.109"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
            ></circle>
          </svg>
          <span>Profile</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          onMouseDown={handleMDown}
          onClick={handleClick}
          exact
          to={`/accounts/edit`}
          // ref={settingBtn}
        >
          <svg
            aria-label="Settings"
            color="#262626"
            fill="#262626"
            height="16"
            role="img"
            viewBox="0 0 24 24"
            width="16"
          >
            <circle
              cx="12"
              cy="12"
              fill="none"
              r="8.635"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
            <path
              d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <span>Settings</span>
        </NavLink>
      </div>
      <div>
        <LogoutButton onMouseDown={handleMDown} onClick={handleClick} />
      </div>
    </div>
  );
};

export default UserMenu;
