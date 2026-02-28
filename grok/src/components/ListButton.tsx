import { useRef, useState } from "react";
import { TooltipPortal } from "./portals/ToolTipPortal";
import styles from "./styles/NavButton.module.css"
import { COLORS } from "../constants/colors";
import { MenuDotsIcon, PencilIcon, PinIcon, TrashIcon } from "../assets/icons";
import { Portal } from "./portals/Portal";
import { Button } from "./Button";
import { useClickOutside } from "../custom hooks/useClickOutside";

interface ListButtonProps {
  item: {
    id: number;
    name: string;
    icon?: React.ReactNode;
  };
}

export const ListButton = ({ item }: ListButtonProps) => {
  const [ showTooltip, setShowTooltip ] = useState(false);
  const [ showMenu, setShowMenu ] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside(menuRef, buttonRef, () => setShowMenu(false));

  const [ tooltipCoords, setTooltipCoords ] = useState({ top: 0, left: 0, width: 0 });
  const [ menuCoords, setMenuCoords ] = useState({ top: 0, left: 0, width: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipCoords({ top: rect.top, left: rect.left, width: rect.width });
    setShowTooltip(true);
  };

  const handleMenuOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuCoords({ top: rect.top, left: rect.left, width: rect.width });
    setShowMenu(true);
  };

  return (
    <button className={styles.chatItemBtn} style={showMenu ? { backgroundColor: "transparent", maskImage: "none"} : undefined}>
      {item.icon && <span className={styles.additionalIcon}>{item.icon}</span>}
      <span className={styles.chatItemTitle} style={showMenu ? { maskImage: "linear-gradient(to right, black 65%, transparent 90%)" } : undefined} onMouseEnter={handleMouseEnter} onMouseLeave={() => setShowTooltip(false)}>{item.name}</span>
      
      {showTooltip && (
        <TooltipPortal>
          <span 
            className={styles.chatItemTitleTooltip}
            style={{
              position: 'absolute',
              top: tooltipCoords.top + window.scrollY - 42,
              left: tooltipCoords.left + window.scrollX + (tooltipCoords.width / 2),
              transform: 'translateX(-50%)',
              pointerEvents: 'none',
              zIndex: 1000,
              backgroundColor: COLORS.gray01
            }}
          >
            {item.name}
          </span>
          
        </TooltipPortal>
      )}
      <button className={styles.menuDotsBtn} style={showMenu ? { visibility: "visible", opacity: 1 } : undefined} ref={buttonRef} onClick={handleMenuOnClick}>
        <MenuDotsIcon size={14}/>
      </button>
      {showMenu && 
        <Portal>
          <div 
            className={styles.menuContainer}
            style={{
              position: 'absolute',
              top: menuCoords.top + window.scrollY - 15,
              left: menuCoords.left + window.scrollX + (menuCoords.width / 2) + 85,
              transform: 'translateX(-50%)',
              zIndex: 99,
              backgroundColor: COLORS.gray01
            }}
            ref={menuRef}
          >
            <Button icon={<PencilIcon size={13}/>} title="Rename"/>
            <Button icon={<PinIcon size={14} strokeWidth={2}/>} title="Pin"/>
            <Button icon={<TrashIcon size={14} strokeWidth={2}/>} title="Delete"/>
          </div>
        </Portal>}

    </button>
  );
};