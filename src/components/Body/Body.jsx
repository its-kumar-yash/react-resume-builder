import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print"; // Print React components in the browser
import { ArrowDown } from "react-feather"; //collection of simply beautiful open source icons
import styles from "./Body.module.css";
import Editor from "../Editor/Editor";

const Body = () => {
  //multiple color options
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  //state denotes the current selected color for resume
  const [activeColor, setActiveColor] = useState(colors[0]);
  //to store the current reference of resume
  const resumeRef = useRef();
  //object of different sections of resume
  //this will show the banner heading for different sections
  const sections = {
    //Key --> value
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${
                activeColor === item ? styles.active : ""
              }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          //store the change when button clicked
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor sections={sections} />
      </div>
    </div>
  );
};

export default Body;
