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

  // const [activeInformation, setActiveInformation] = useState(
  //   information[sections[Object.keys(sections)[0]]]
  // );

  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setSectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );

  //Basic Information Form Body
  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          // value={values.name}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, name: event.target.value }))
          // }
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend developer"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          // value={values.linkedin}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          // }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your github profile link"
          // value={values.github}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, github: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Email"
          placeholder="Enter your email"
          // value={values.email}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, email: event.target.value }))
          // }
        />
        <InputControl
          label="Enter phone"
          placeholder="Enter your phone number"
          // value={values.phone}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, phone: event.target.value }))
          // }
        />
      </div>
    </div>
  );

  //Work Experience Form Body
  const workExperienceBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend developer"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
          // value={values.companyName}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, companyName: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
          // value={values.certificationLink}
          // onChange={(event) =>
          //   setValues((prev) => ({
          //     ...prev,
          //     certificationLink: event.target.value,
          //   }))
          // }
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
          // value={values.location}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, location: event.target.value }))
          // }
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
          // value={values.startDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, startDate: event.target.value }))
          // }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
          // value={values.endDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, endDate: event.target.value }))
          // }
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  //Project Form Body
  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Chat app"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
      </div>
      <InputControl
        label="Overview"
        placeholder="Enter basic overview of project"
        // value={values.overview}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, overview: event.target.value }))
        // }
      />
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
          // value={values.link}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, link: event.target.value }))
          // }
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
          // value={values.github}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, github: event.target.value }))
          // }
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          // value={values.points ? values.points[3] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  //Education Form Body
  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. B-tech"
          // value={values.title}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, title: event.target.value }))
          // }
        />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
        // value={values.college}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, college: event.target.value }))
        // }
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"
          // value={values.startDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, startDate: event.target.value }))
          // }
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
          // value={values.endDate}
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, endDate: event.target.value }))
          // }
        />
      </div>
    </div>
  );

  //Achievements Form Body
  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl
          placeholder="Line 1"
          // value={values.points ? values.points[0] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <InputControl
          placeholder="Line 2"
          // value={values.points ? values.points[1] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <InputControl
          placeholder="Line 3"
          // value={values.points ? values.points[2] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <InputControl
          placeholder="Line 4"
          // value={values.points ? values.points[3] : ""}
          // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  //Summary Form Body
  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
        // value={values.summary}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, summary: event.target.value }))
        // }
      />
    </div>
  );

  //Other Form Body
  const otherBody = (
    <div className={styles.detail}>
      <InputControl
        label="Other"
        placeholder="Enter something"
        // value={values.other}
        // onChange={(event) =>
        //   setValues((prev) => ({ ...prev, other: event.target.value }))
        // }
      />
    </div>
  );

  //Logic to generate different forms body
  const generateFormBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExperienceBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

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
        <InputControl
          label="Title"
          placeholder="Enter section title"
          // value={sectionTitle}
          // onChange={(event) => setSectionTitle(event.target.value)}
        />

        {generateFormBody()}

      </div>
    </div>
  );
};

export default Editor;
