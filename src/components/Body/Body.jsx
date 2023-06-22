import React, { useState } from "react";
import styles from "./Body.module.css";

const Body = () => {
  //multiple color options
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  //state denotes the current selected color for resume
  const [activeColor, setActiveColor] = useState(colors[0]);
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
      </div>
    </div>
  );
};

export default Body;
