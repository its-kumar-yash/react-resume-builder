import React, { useState } from "react";

import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";

const Editor = (props) => {
  //store the sections props
  const sections = props.sections;
  //to store the current active section
  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  ); //intialize the active section with first key

  return (
    <div className={styles.container}>
      {/* to show the current active section */}
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter section title" />
      </div>
    </div>
  );
};

export default Editor;
