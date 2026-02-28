import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { NavbarProvider } from './contexts/NavBarContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavbarProvider>
  </StrictMode>
)
