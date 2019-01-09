import React, { Component } from "react";
import styles from "./Header.module.css";

export default class Header extends Component {
  render() {
    const wes = styles["link-item"];
    return (
      <div>
        <div className={styles["link-item"]}>test this css module</div>
      </div>
    );
  }
}
