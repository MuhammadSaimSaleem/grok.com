import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react"
import styles from "./styles/NavButton.module.css"
import { useNavbar } from "../contexts/NavBarContext";
import { ArrowIcon } from "../assets/icons";
import { ListButton } from "./ListButton";

interface HistoryButtonProps{
    icon: React.ReactNode,
    title: string,
}

export const HistoryButton = ({icon, title}: HistoryButtonProps) => {
  const [ isBtnHovered, setBtnHovered ] = useState(false);
  const [ isDropdownOpen, setDropDownState ] = useState(true);
  const { isCollapsed } = useNavbar();

  const historyData = {
    "today": 
        [
            { id: 1, name: "Medieval Magic Game" },
            { id: 2, name: "Life of Zsabnidar on the Alien Planet"},
            { id: 3, name: "The Beautiful Life of Mr. Chips"}
        ],
    "yesterday": 
        [
            { id: 4, name: "Voice Assistant UI" },
            { id: 5, name: "Database Schema" },
            { id: 6, name: "Dummy Data Title for Dummies"},
            { id: 7, name: "100 Ways to Die"},
            { id: 8, name: "Why Are you Gae?"},
            { id: 9, name: "Do you know the wae?"},
        ]
  };

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

  const buttonClass = `${styles.pageBtn} ${isActive ? styles.pageBtnActive : ""} ${styles.zeroPadding}  ${isCollapsed && styles.pageBtnCollapsed}`;

  function handleClick(){
    navigate(`/${title.toLowerCase()}`);
  }

  return (
    <div className={styles.historyBtn}>
        <button className={buttonClass} onMouseEnter={() => setBtnHovered(true)} onMouseLeave={() => setBtnHovered(false)} onClick={handleClick}>
          <span className={styles.iconWrapper}>{currentIcon}
            {isCollapsed &&
                <div className={styles.flyoutHistoryContainer}>
                    <div className={styles.flyoutHistoryHeader}>
                        {title}
                    </div>
                    <div className={styles.flyoutHistoryBody}>
                        <span className={styles.flyoutDateCategory}>Today</span>
                        {historyData.today.map(item => (
                            <button key={item.id} className={styles.flyoutChatItem}>
                                <span className={styles.flyoutChatItemTitle}>{item.name}</span>
                                <span className={styles.flyoutChatItemTitleTooltip}>{item.name}</span>
                            </button>
                        ))}
                        <span className={styles.flyoutDateCategory}>Yesterday</span>
                        {historyData.yesterday.map(item => (
                            <button key={item.id} className={styles.flyoutChatItem}>
                                <span className={styles.flyoutChatItemTitle}>{item.name}</span>
                                <span className={styles.flyoutChatItemTitleTooltip}>{item.name}</span>
                            </button>
                        ))}
                        <span className={styles.flyoutSeeAllBtn}>See All</span>
                    </div>
                </div>}
          </span>
          {!isCollapsed && <p className={styles.titleText}>{title}</p>}
        </button>

        {!isCollapsed && isDropdownOpen &&
            <div className={styles.dropdownContainer}>
                <div className={styles.dateContainer}>
                    <p className={styles.dateCategory}>Today</p>
                    {historyData.today.map(item => (
                        <div className={styles.dropdownItemContainer}>
                            <ListButton key={item.id} item={item} />
                        </div>
                    ))}
                </div>

                <div className={styles.dateContainer}>
                    <p className={styles.dateCategory}>Yesterday</p>
                    {historyData.yesterday.map(item => (
                        <div className={styles.dropdownItemContainer}>
                            <ListButton key={item.id} item={item} />  
                        </div>
                    ))}
                </div>

                <button className={styles.seeAllBtn}>See all</button>
            </div>
        }
    </div>
  )
}
