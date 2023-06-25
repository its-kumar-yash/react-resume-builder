import React, { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print"; // Print React components in the browser
import { ArrowDown } from "react-feather"; //collection of simply beautiful open source icons
import styles from "./Body.module.css";
import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

const Body = () => {
  //multiple color options
  const colors = ["#6b46c1", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936", "#239ce2"];
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

  //this state will store all the information of the resume
  //to set user input to the resume object
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo, //section title is unique
      sectionTitle: sections.basicInfo,
      detail: {}, //detail is a object as we can have multiple user details e.g. phone no. address
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [], // work experience can be more than 1, so used array to respresent that
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  //When resume information changes
  //update the section information
  useEffect(() => {
    // console.log(resumeInformation);
  }, [resumeInformation]);

  return (
      <div className={styles.container}>
        <p className={styles.heading}>Builder Dashboard</p>
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
          <Editor
            sections={sections}
            information={resumeInformation}
            setInformation={setResumeInformation}
          />

          <Resume
            ref={resumeRef}
            sections={sections}
            information={resumeInformation}
            activeColor={activeColor}
          />
        </div>
      </div>
  );
};

export default Body;
