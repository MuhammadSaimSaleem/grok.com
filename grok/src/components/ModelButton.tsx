import { TickIcon } from "../assets/icons";
import { COLORS } from "../constants/colors";
import styles from "./styles/ModelButton.module.css"

interface ModelButtonProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  isActive?: boolean;
  onClick: () => void;
}

export const ModelButton = ({icon, title, desc, isActive, onClick}: ModelButtonProps) => {
  const isCustomBtn = title === 'Custom Instructions';

  const isUnavailable = title === 'Heavy' ? true : false;
  const unavailableStyle = title === 'Heavy' ? { color: COLORS.gray04, cursor: 'not-allowed' as const } : {};

  return (
    <button className={`${styles.modelBtn} ${isCustomBtn ? styles.customModelBtn : ''}`} style={unavailableStyle} onClick={!isUnavailable ? onClick : undefined}>
      {icon}
      <div className={styles.modelTextContainer}>
        <span className={styles.modelTitle}>{title}</span>
        <span className={styles.modelDescription} style={unavailableStyle}>{desc}</span>
      </div>
      {isActive && 
        <span className={styles.modelActiveIcon}>
          <TickIcon size={16}/>
        </span>}
      
      {/* Customize Instructions Button */}
      {isCustomBtn &&
        <button className={styles.customizeBtn}>
          Customize
        </button>
        }
    </button>
  )
}
