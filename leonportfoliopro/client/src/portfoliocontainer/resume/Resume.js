import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/screenheading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 15 },
    { skill: "React JS", ratingPercentage: 20 },
    { skill: "React Native", ratingPercentage: 0 },
    { skill: "Express JS", ratingPercentage: 0 },
    { skill: "Node JS", ratingPercentage: 10 },
    { skill: "Mongo Db", ratingPercentage: 0 },
    { skill: "Java", ratingPercentage: 30 },
    { skill: "HTML", ratingPercentage: 30 },
    { skill: "CSS", ratingPercentage: 30 },
    { skill: "Python", ratingPercentage: 20 },
    { skill: "Linux", ratingPercentage: 30 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022.03", toDate: "2022.03" },
      description:
        "A personal portfolio website to show I can follow instructins",
      subHeading: "Used, React JS, Bootstrap, CSS, HTML",
    },
    {
      title: "Personal gaming linux laptop",
      duration: { fromDate: "2021", toDate: "current" },
      description: "Using linux to create a faster personal machine",
      subHeading: "Used, Linux, terminal, github",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Florida State University"}
        subHeading={"Bachelor of Science in Political Science & History"}
        fromDate={"2007"}
        toDate={"2011"}
      />
      <ResumeHeading
        heading={"South West University of Nationalities"}
        subHeading={"Chinese language studies"}
        fromDate={"2015"}
        toDate={" "}
      />
      <ResumeHeading
        heading={"Shenzhen University"}
        subHeading={"Chinese language studies"}
        fromDate={"2016"}
        toDate={" "}
      />
      <ResumeHeading
        heading={"University of Helsinki"}
        subHeading={"Java Programming I"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of People"}
        subHeading={"Bachelor of Science in Computer Science"}
        fromDate={"2022"}
        toDate={"2023(estimated Spring)"}
      />
      <ResumeHeading
        heading={"Certificates"}
        subHeading={
          "CELTA, Google IT Support Professional, Google Data Analytics, Google UX Design"
        }
      />
      <ResumeHeading
        heading={"Odin Project"}
        subHeading={"Full Stack Javascript"}
        fromDate={"2022.03"}
        toDate={"2022(estimated Fall)"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"10 years in China "}
          subHeading={"Teacher"}
          fromDate={"2011"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            English, political science, social science, AP literature, AP world
            history, TEFL/TOEFL
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Cross-cultural and cross-generational communication skills
          </span>
          <br />
          <span className="resume-description-text">
            - Able to manage and set expectations and goals for shareholders
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Interests Placeholder 1"
        description="Interests text placeholder"
      />
      <ResumeHeading
        heading="Interests Placeholder 2"
        description="Interests text placeholder"
      />
      <ResumeHeading
        heading="Interests Placeholder 3"
        description="Interests text placeholder"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
    {/*     <div className="resume-container screen-container fade-in" id={props.id || ""}> */}
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
