import { SearchButton } from "./SearchButton";
import { NavButton } from "./NavButton";
import styles from "./styles/NavBar.module.css";
import { ProjectsButton } from "./ProjectsButton";
import { HistoryButton } from "./HistoryButton";
import { useNavbar } from "../contexts/NavBarContext";
import { AudioWaveIcon, ChatIcon, FileIcon, GrokIcon, HistoryIcon, PictureIcon } from "../assets/icons";

export const NavBar = () => {
    const { isCollapsed, toggleNavbar } = useNavbar();

    const collapsedStyle = isCollapsed ? styles.collapsed : "";
    return (
        <div className={`${styles.main} ${collapsedStyle}`}>
            <div className={`${styles.navBar} ${collapsedStyle}`}>
                <button className={styles.grokBtn}>
                    <GrokIcon size={28}/>
                </button>
            
                <div className={styles.navLinksWrapper}>
                    <div className={`${styles.navLinks} ${collapsedStyle}`}>
                        <SearchButton/>
                        <NavButton icon={<ChatIcon size={18}/>} title="Chat" />
                        <NavButton icon={<AudioWaveIcon size={18} stroke="white"/>} title="Voice" />
                        <NavButton icon={<PictureIcon size={18}/>} title="Imagine" badge={true} />
                        <ProjectsButton icon={<FileIcon size={18} stroke="white"/>} title="Projects"/>
                        <HistoryButton icon={<HistoryIcon size={18}/>} title="History" />
                    </div>
                </div>
            </div>
            <div className={`${styles.navBtns} ${collapsedStyle}`}>
                <img className={`${styles.profileImg} ${collapsedStyle}`} src="../src/assets/images/profile.png" alt="Profile Photo" />
                <button className={`${styles.toggleMenuBtn}  ${collapsedStyle}`} onClick={() => toggleNavbar()}>
                    <svg className={`${styles.toggleMenuIcon} ${collapsedStyle}`} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
                </button>
            </div>
        </div>
    )
}
