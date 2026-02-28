import styles from "./styles/SearchButton.module.css";
import { useNavbar } from "../contexts/NavBarContext";
import { SearchIcon } from "../assets/icons";

export const SearchButton = () => {
  const { isCollapsed } = useNavbar();
  return (
    <div>
      <button className={`${styles.inputBtn} ${isCollapsed && styles.collapsed}`}>
        <SearchIcon size={18}/>
        {!isCollapsed && <p className={`${styles.inputBtnText} ${isCollapsed && styles.collapsed}`}>Search <span className={styles.textCtrl}>Ctrl+K</span></p>}
      </button>
    </div>
  )
}