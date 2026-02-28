import { useState } from "react"
import styles from "./styles/Projects.module.css"
import { AppleIcon, BookIcon, BriefcaseIcon, HourGlassIcon, MenuDotsIcon, PageIcon, UserIcon } from "../assets/icons";
import { COLORS } from "../constants/colors";

export const Projects = () => {
  const projectData = [
    { id: 1, icon: <HourGlassIcon size={16} stroke={COLORS.gold01}/>, name: "Storyteller" },
    { id: 2, icon: <BriefcaseIcon size={16} stroke={COLORS.ghost}/>, name: "Lawyer" }
  ]

  const exampleData = [
    { id: 1, icon: <BookIcon size={16} stroke={COLORS.ghost}/>, name: "Legal Document Reviewer", desc: "Get expert analysis of U.S. legal documents"},
    { id: 2, icon: <BriefcaseIcon size={16} stroke={COLORS.gold01}/>, name: "Cover Letter Writer", desc: "Craft tailored cover letters that align your experience with the job description"},
    { id: 3, icon: <PageIcon size={16} stroke={COLORS.blue01}/>, name: "Writing Assistant", desc: "Polish and improve any text for clarity, conciseness, and style."},
    { id: 4, icon: <AppleIcon size={16} stroke={COLORS.red01}/>, name: "Fitness Advice", desc: "Plan workouts, nutrition, and fitness goals with evidence-based guidance"},
  ]
  

  const [ btnState, setbtnState ] = useState<'projects' | 'shared' | 'examples'>('projects');

  return (
    <div className={styles.main}>
        <div className={styles.body}>
          <div className={styles.headerContainer}>
              <h1 className={styles.header}>Projects</h1>
              <button className={styles.createBtn}>
                <span className={styles.createBtnIcon}>+</span>
                <span>Create project</span>
              </button>
          </div>
          <div className={styles.navBar}>
            <button className={`${styles.navBtns} ${btnState === 'projects' && styles.activeNavBtns}`} onClick={() => setbtnState('projects')}>My Projects</button>
            <button className={`${styles.navBtns} ${btnState === 'shared' && styles.activeNavBtns}`} onClick={() => setbtnState('shared')}>Shared with me</button>
            <button className={`${styles.navBtns} ${btnState === 'examples' && styles.activeNavBtns}`} onClick={() => setbtnState('examples')}>Examples</button>
          </div>
          <div className={styles.content}>
            {btnState === 'projects' &&
              <div className={styles.projectBtnContainer}>
                {projectData.map((item) => (
                  <button key={item.id} className={styles.projectBtn}>
                    <div className={styles.iconContainer}>
                      {item.icon}
                      <span className={styles.menuIcon}><MenuDotsIcon size={12}/></span>
                    </div>
                    {item.name}
                  </button>
                ))}
              </div>
            }
            {btnState === 'shared' &&
              <div className={styles.sharedProjectsContainer}>
                <span className={styles.sharedUserIcon}><UserIcon size={24}/></span>
                <p className={styles.sharedUpperText}>You don't have any projects shared with you.</p>
                <p className={styles.sharedLowerText}>When someone shares a project with you, it will appear here.</p>
              </div>
            }
            {btnState === 'examples' &&
              <div className={styles.exampleProjectsContainer}>
                {exampleData.map((item) => (
                  <button key={item.id} className={styles.exampleBtn}>
                    <div className={styles.exampleBtnHeader}>
                      {item.icon}
                      <span className={styles.exampleBtnTitle}>{item.name}</span>
                      <span className={styles.exampleBtnExample}>Example</span>
                    </div>
                    <span className={styles.exampleBtnDesc}>{item.desc}</span>
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
    </div>
  )
}
