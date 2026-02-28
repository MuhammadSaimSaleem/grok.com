import { useState, useEffect } from "react";
import { ArrowIcon, BulbIcon, CrossIcon, LightningIcon, MoonIcon, RocketIcon, TickIcon } from "../../assets/icons";
import styles from "./CreateProjectModal.module.css";

interface ModeOption {
  id: "auto" | "fast" | "expert" | "beta";
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const MODES: ModeOption[] = [
  { id: "auto", title: "Auto", desc: "Chooses Fast or Expert", icon: <RocketIcon /> },
  { id: "fast", title: "Fast", desc: "Quick responses by 4.1", icon: <LightningIcon /> },
  { id: "expert", title: "Expert", desc: "Thinks hard", icon: <BulbIcon /> },
  { id: "beta", title: "Grok 4.20 (Beta)", desc: "4 Agents", icon: <MoonIcon /> },
];

interface CreateProjectModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export const CreateProjectModal = ({ isModalOpen, onClose }: CreateProjectModalProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState<"auto" | "fast" | "expert" | "beta">("auto");

  const handleClose = () => {
    onClose();
    setIsDropdownOpen(false);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const currentMode = MODES.find((m) => m.id === selectedMode);

  return (
    <div className={styles.overlay} onClick={handleClose}>
        <div className={styles.content} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
                <button className={styles.iconSelectorBtn}><RocketIcon size={22}/></button>
                <input type="text" placeholder="Project name" className={styles.projectNameInput} />
                <button className={styles.closeModalBtn} onClick={handleClose}><CrossIcon/></button>
            </div>
            
            <div className={styles.instructionsContainer}>
              <span className={styles.instructionsText}>Project Instructions</span>
              <textarea className={styles.instructionsTextArea} placeholder="Add instructions about the tone, style and persona you want Grok to adopt."/>
            </div>
            
            <div className={styles.modeContainer}>
              <span className={styles.modeText}>Preferred Mode</span>
              <div className={styles.dropdownTrigger} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className={styles.triggerContent}>
                  {currentMode?.icon}
                  <span>{currentMode?.title}</span>
                </div>
                <ArrowIcon size={12} className={isDropdownOpen ? styles.rotate : ""} />
              </div>
              
              {isDropdownOpen && (
                <div className={styles.menu}>
                  {MODES.map((mode) => (
                    <div 
                      key={mode.id} 
                      className={`${styles.option} ${selectedMode === mode.id ? styles.active : ""}`}
                      onClick={() => {
                        setSelectedMode(mode.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className={styles.optionIcon}>{mode.icon}</div>
                      <div className={styles.optionText}>
                        <div className={styles.optionTitle}>{mode.title}</div>
                        <div className={styles.optionDesc}>{mode.desc}</div>
                      </div>
                      {selectedMode === mode.id && <TickIcon size={16} className={styles.check} />}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.submitContainer}>
                <button className={styles.submitBtn} onClick={onClose}>Create</button>
            </div>
        </div>
    </div>
  );
}