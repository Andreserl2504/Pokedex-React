import { createContext, useState } from 'react'

export const SideBarContext = createContext()

export function SideBarProvider({ children }) {
  const [sideBarBtn, setSideBarBtn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const handleSideBar = () => {
    setSideBarBtn((prevState) => !prevState)
  }
  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState)
    document.querySelector('html').classList.toggle('dark')
  }
  return (
    <SideBarContext.Provider value={{ sideBarBtn, handleSideBar, darkMode, handleDarkMode }}>
      {children}
    </SideBarContext.Provider>
  )
}
