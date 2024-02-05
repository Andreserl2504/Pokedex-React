import { useContext } from 'react'
import { SideBarContext } from '../context/SideBar'
import { MoonIcon, SunIcon } from './icons/icons'

export function SideBar() {
  const { sideBarBtn, darkMode, handleDarkMode } = useContext(SideBarContext)
  return (
    <aside
      className={` dark:bg-gray-darkMode w-96 h-screen z-10  bg-gray-10 fixed right-0 shadow-lg duration-500 
                    p-10
                    ${sideBarBtn ? 'translate-x-0' : 'translate-x-[100%]'}`}
    >
      <section>
        <div className=' w-full border-2 border-dotted border-white-default rounded-md shadow-sm p-5 dark:text-white-default'>
          You do not have any pokemon team
          <div className=' flex justify-center'>😢</div>
        </div>
      </section>
      <button
        onClick={handleDarkMode}
        className={`relative w-10 h-10 flex justify-center
        items-center rounded-md bg-white-default dark:bg-black-darkMode`}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </aside>
  )
}
