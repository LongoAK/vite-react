import React, { useState, useEffect } from "react";
import classes from "./menu.module.css";

const Menu = (props: any) => {
  const {} = props;

  return (
    <div className={classes.menuWrapper}>
      <ul className={classes.menu}>
        <li className={classes.menuItem}>
          <svg width="1.25em" height="1.25em" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"
            ></path>
          </svg>
          <p className={classes.menuText}>Dashboard</p>
        </li>
        <li className={classes.menuItem}>
          <svg width="1.25em" height="1.25em" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"
            ></path>
            <path
              fill="currentColor"
              d="M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"
            ></path>
          </svg>
          <p className={classes.menuText}>Project</p>
        </li>
        <li className={classes.menuItem}>
          <svg width="1.25em" height="1.25em" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M30 30h-2v-5a5.006 5.006 0 0 0-5-5v-2a7.008 7.008 0 0 1 7 7zm-8 0h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7zM20 2v2a5 5 0 0 1 0 10v2a7 7 0 0 0 0-14zm-8 2a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
            ></path>
          </svg>
          <p className={classes.menuText}>Team Member</p>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
