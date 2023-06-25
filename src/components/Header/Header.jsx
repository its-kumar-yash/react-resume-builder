import React from "react";
import styles from "./Header.module.css";
import resumeBanner from "../../assets/resume1.svg";

const Header = () => {
  const scrollHandler = () => {
    window.scroll({ top: 750, behavior: "smooth" });
    // console.log("Clicked");
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          If You Want To Get Gaining, Get A Resume
        </p>
        <p className={styles.subHeading}>
          ResumeXplorer is a tool that often constitutes an automated process in
          which you follow a template and input your information. Ability to
          build, print, and download your resume for free in minutes.
        </p>
        <button onClick={() => scrollHandler()} className={styles.btn}>
          Build Resume
        </button>
      </div>
      <div className={styles.right}>
        <img src={resumeBanner} alt="Resume" />
      </div>
    </div>
  );
};

export default Header;
