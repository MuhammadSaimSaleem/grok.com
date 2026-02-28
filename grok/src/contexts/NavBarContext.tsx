import React, { createContext, useContext, useState } from 'react';
import type {ReactNode} from 'react';

// 1. Define what the context looks like
interface NavbarContextType {
  isCollapsed: boolean;
  toggleNavbar: () => void;
}

// 2. Create the context with a default value
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// 3. Create the Provider component
export const NavbarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleNavbar = () => setIsCollapsed((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// 4. Custom hook for easy access
export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};