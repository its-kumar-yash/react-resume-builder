import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      Copyright © 2022, All rights reserved <br />
      Made with ♥ by{" "}
      <a href="https://sagardng123.wixsite.com/sagardng">Yash Kumar</a>
    </div>
  );
};

export default Footer;
