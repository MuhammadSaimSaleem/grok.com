import { useState, type CSSProperties } from "react";
import styles from "./styles/Button.module.css"

export interface ButtonProps{
    title: string,
    icon?: React.ReactElement<SVGElement>,
    additionalIcon?: React.ReactElement<SVGElement>,
    className?: string,
    style?: CSSProperties,
}

export const Button = ({icon, title, additionalIcon, className, style}: ButtonProps) => {
  const [ isBtnClicked, setBtnClicked ] = useState(false);

  const btnClass = `${styles.btnContainer} ${className}`.trim();

  return (
    <button style={style} className={btnClass} onClick={() => setBtnClicked(!isBtnClicked)}>
      <span className={styles.iconWrapper}>{icon}</span> 

      <p className={styles.titleText}>{title}</p>
      <span className={styles.additionalIconWrapper}>{additionalIcon}</span>
    </button>
  )
}
