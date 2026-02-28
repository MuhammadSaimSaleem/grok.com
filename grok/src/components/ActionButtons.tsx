import React, { useRef, useState } from "react";
import styles from "./styles/ActionButton.module.css"
import { COLORS } from "../constants/colors";
import { Button } from "./Button";
import { AppleIcon, BookIcon, BriefcaseIcon, DollarIcon, FileIcon, PageIcon, PlusIcon } from "../assets/icons"
import { useClickOutside } from "../custom hooks/useClickOutside";

interface ActionButtonProps{
    icon: React.ReactElement<SVGElement>,
    title: string,
    additionalIcon?: React.ReactElement<SVGElement>,
    onClick?: () => void;
}

export const ActionButtons = ({icon, title, additionalIcon, onClick}: ActionButtonProps) => {
  
  const [ isBtnClicked, setBtnClicked ] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(menuRef, buttonRef, () => setBtnClicked(false));

  const isAdditional = additionalIcon ? true : false;
  const isPersonaBtn = title === 'Pick Personas' ? true : false;

  const buttonClass = `${styles.buttonContainer} ${isBtnClicked && isPersonaBtn && styles.buttonContainerClicked}`;

  const handleClick = () => {
    setBtnClicked(!isBtnClicked);
    if(onClick) onClick();
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button className={buttonClass} ref={buttonRef} onClick={handleClick}>
        {icon}
        <div className={styles.buttonTitle}>{title}</div>
        {isAdditional && <div className={styles.additionalIcon}>{additionalIcon}</div>}
      </button>
      {isPersonaBtn && isBtnClicked &&
        <div className={styles.dropdownMenuContainer} ref={menuRef}>
          <Button icon={<BookIcon size={16} stroke={COLORS.ghost}/>} title="Legal Document Reviewer"/>
          <Button icon={<BriefcaseIcon size={16} stroke={COLORS.gold01}/>} title="Cover Letter Writer"/>
          <Button icon={<PageIcon size={16} stroke={COLORS.blue01}/>} title="Writing Assistant"/>
          <Button icon={<AppleIcon size={16} stroke={COLORS.red01}/>} title="Fitness Advice"/>
          <Button icon={<DollarIcon size={16} stroke={COLORS.green01}/>} title="Personal Finance Assistant"/>
          <Button icon={<PlusIcon size={16} stroke={COLORS.ghost}/>} title="Create Project"/>
          <Button icon={<FileIcon size={16} style={{color: COLORS.ghost}}/>} title="View All Projects"/>
        </div>}
    </div>
  )
}