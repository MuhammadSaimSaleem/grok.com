import { NavBar } from './components/NavBar'
import { COLORS } from './constants/colors'
import { Route, Routes } from 'react-router-dom';
import { Chat } from "./pages/Chat";
import { Voice } from "./pages/Voice";
import { Imagine } from "./pages/Imagine";
import { Projects } from "./pages/Projects";
import { useNavbar } from './contexts/NavBarContext';
import styles from "./App.module.css";

function App(): React.ReactNode {
  const colors = {
    '--colors-primary': COLORS.primary,

    '--colors-ghost': COLORS.ghost,
    '--colors-gray01': COLORS.gray01,
    '--colors-gray02': COLORS.gray02,
    '--colors-gray03': COLORS.gray03,
    '--colors-gray04': COLORS.gray04,
    '--colors-darkGray': COLORS.darkGray,

    '--colors-black01': COLORS.black01,
    '--colors-black02': COLORS.black02,
    '--colors-black03': COLORS.black03,
  } as React.CSSProperties;

  const { isCollapsed } = useNavbar();

  return (
      <div className={styles.body} style={colors}>
        <nav className={`${styles.nav} ${isCollapsed && styles.collapsed}`}>
          <NavBar />
        </nav>
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/voice" element={<Voice />} />
            <Route path="/imagine" element={<Imagine />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
  )
}

export default App
