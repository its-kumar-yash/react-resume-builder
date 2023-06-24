import React, { useEffect, useState } from "react";

import styles from "./Resume.module.css";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

const Resume = (props) => {
  //information entered by the user
  const information = props.information;
  const sections = props.sections;
  //to provide drag and drop support
  //there are two empty array, for two column in resume
  const [columns, setColumns] = useState([[], []]);

  //create all information as an object
  const info = {
    basicInfo: information[sections.basicInfo],
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  //function to format the date generated by js
  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  //All the Section of Resume
  //Create object for each section

  const sectionDiv = {
    //Work Experience Section
    [sections.workExp]: (
      <div
        key={"workExp"}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    //Project Section
    [sections.project]: (
      <div
        key={"project"}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    //Education Section
    [sections.education]: (
      <div
        key={"education"}
        className={`${styles.section} ${
          info.education?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.education?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.education?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),

    //Achievements Section
    [sections.achievement]: (
      <div
        key={"achievement"}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),

    //Summary Section
    [sections.summary]: (
      <div
        key={"summary"}
        className={`${styles.section} ${
          info.summary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info.summary?.detail}</p>
        </div>
      </div>
    ),

    //Other Section
    [sections.other]: (
      <div
        key={"other"}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  //filling column arrays while mounting
  //pass it by id
  useEffect(() => {
    setColumns([
      [sections.project, sections.education, sections.summary],
      [sections.workExp, sections.achievement, sections.other],
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.heading}>Name</p>
        <p className={styles.subHeading}>Blockchain Developer</p>

        <div className={styles.links}>
          <a className={styles.link}>
            <AtSign /> Email@gmail.com
          </a>
          <a className={styles.link}>
            <Phone /> 890678532
          </a>
          <a className={styles.link}>
            <Linkedin /> www.linkedin.com
          </a>
          <a className={styles.link}>
            <GitHub /> www.github.com
          </a>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.col1}>
          {columns[0].map((item) => sectionDiv[item])}
        </div>
        <div className={styles.col2}>
          {columns[1].map((item) => sectionDiv[item])}
        </div>
      </div>
    </div>
  );
};

export default Resume;
