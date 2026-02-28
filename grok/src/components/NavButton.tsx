import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles/NavButton.module.css";
import { useState } from "react";
import { useNavbar } from "../contexts/NavBarContext";

interface NavLinksProps {
  icon: React.ReactElement<SVGElement>;
  title: "Chat" | "Voice" | "Imagine";
  badge?: boolean;
}

export const NavButton = ({ icon, title, badge }: NavLinksProps) => {
  const { isCollapsed } = useNavbar();
  const [ isNavBtnsHovered, setNavBtnsHovered ] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const isActive = title === "Chat" ? (path === "/chat" || path === "/") : path.includes(title.toLowerCase());
  const buttonClass = `${styles.pageBtn} ${isActive ? styles.pageBtnActive : ""} ${isCollapsed && styles.pageBtnCollapsed}`;

  const handleClick = () => {
    navigate(`/${title.toLowerCase()}`);
  }

  return (
    <button className={buttonClass} onMouseOver={() => setNavBtnsHovered(true)} onMouseOut={() => setNavBtnsHovered(false)} onClick={handleClick}>
      <span className={styles.iconWrapper}>{icon}
        {isCollapsed && isNavBtnsHovered && <div className={styles.hoveredTooltip}>{title}</div>}
      </span> 

      {!isCollapsed && (
        <>
          <p className={styles.titleText}>{title}</p>
          {isNavBtnsHovered && <div className={styles.shortcutContainer}>{title === "Chat" && <p className={styles.shortcutText}>Ctrl+J</p>}</div>}
          {badge && <div className={styles.blueDot}/>}
        </>
      )}
    </button>
  );
};