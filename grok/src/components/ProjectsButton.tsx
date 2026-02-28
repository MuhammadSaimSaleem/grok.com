import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"
import styles from "./styles/NavButton.module.css"
import { useNavbar } from "../contexts/NavBarContext";
import { ListButton } from "./ListButton";
import { ArrowIcon, BriefcaseIcon, HourGlassIcon } from "../assets/icons";
import { COLORS } from "../constants/colors";
import { CreateProjectModal } from "./modals/CreateProjectModal";

interface ProjectsButtonProps{
    icon: React.ReactNode,
    title: string,
}

export const ProjectsButton = ({icon, title}: ProjectsButtonProps) => {
  const [ isBtnHovered, setBtnHovered ] = useState(false);
  const [ isDropdownOpen, setDropDownState ] = useState(true);
  const [ showProjectCreationMenu, setShowProjectCreationMenu ] = useState(false);
  const { isCollapsed } = useNavbar();

  const projectData = [
    { id: 1, icon: <HourGlassIcon size={16} stroke={COLORS.gold01}/>, name: "Storyteller" },
    { id: 2, icon: <BriefcaseIcon size={16} stroke={COLORS.ghost}/>, name: "Lawyer" }
  ]

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const dropdownBtnClicked = (e: React.MouseEvent<HTMLButtonElement>): void  => {
    e.stopPropagation();
    setDropDownState(!isDropdownOpen)
  }

  const currentIcon: React.ReactNode = isBtnHovered && !isCollapsed ? 
    <button className={`${styles.dropdownBtn} ${isDropdownOpen && styles.dropdownBtnClicked}`} onClick={dropdownBtnClicked}>
        {<ArrowIcon size={16}/>}
    </button> : icon;

  const isActive = path.includes(title.toLowerCase());

  const buttonClass = `${styles.pageBtn} ${isActive ? styles.pageBtnActive : ""} ${isCollapsed && styles.pageBtnCollapsed}`;
  
  function handleClick(){
    navigate(`/${title.toLowerCase()}`);
  }

  return (
    <div className={styles.projectBtn}>
      <button className={buttonClass} onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} onClick={handleClick}>
        <span className={styles.iconWrapper}>{currentIcon}
          {isCollapsed &&
            <div className={styles.flyoutProjectContainer}>
                <div className={styles.flyoutProjectHeader}>
                    {title}
                    <button className={styles.flyoutProjectCreationIconBtn} onClick={() => setShowProjectCreationMenu(true)}>+</button>
                </div>
                <div className={styles.flyoutProjectBody}>
                    {projectData.map(item => (
                        <button className={styles.flyoutChatItem}>
                            {item.icon && <span className={styles.additionalIcon}>{item.icon}</span>}
                            <span className={styles.flyoutChatItemTitle}>{item.name}</span>
                            <span className={styles.flyoutChatItemTitleTooltip}>{item.name}</span>
                        </button>
                    ))}
                    <span className={styles.flyoutSeeAllBtn}>See All</span>
                </div>
            </div>}
        </span>
        {!isCollapsed && <>
            <p className={styles.titleText}>{title}</p>
            <button className={styles.createProjectBtn} onClick={() => setShowProjectCreationMenu(true)}>+</button>
          </>
        }
      </button>
      {!isCollapsed && isDropdownOpen &&
        <div className={styles.dropdownContainer}>
            <div className={styles.projectContainer}>
                {projectData.map(item => (
                    <div className={styles.dropdownItemContainer}>
                        <ListButton item={item} />
                    </div>
                ))}
            </div>
            <button className={styles.seeAllBtn}>See all</button>
        </div>}
      <CreateProjectModal isModalOpen={showProjectCreationMenu} onClose={() => setShowProjectCreationMenu(false)}/>
    </div>
  )
}

