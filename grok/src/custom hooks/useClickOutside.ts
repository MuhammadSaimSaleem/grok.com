import { useEffect, type RefObject } from 'react';

export const useClickOutside = (
  menuRef: RefObject<HTMLElement | null>,
  triggermenuRef: RefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // If click is inside the menu OR inside the trigger button, DO NOTHING.
      if (
        (menuRef.current && menuRef.current.contains(target)) ||
        (triggermenuRef.current && triggermenuRef.current.contains(target))
      ) {
        return;
      }

      // Otherwise, close the menu
      callback();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, triggermenuRef, callback]);
};