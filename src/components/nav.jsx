import pokedex_logo from '../assets/IMG/pokemon_logo.png'
import { Arrow } from './icons/icons'
import { SideBarIcon } from './icons/icons'
import { useState } from 'react'
import { TypeButton } from './TypeButton'

export function Nav() {
  const NAV_CONTENT = {
    WEB_TITLE: 'Pokedex'
  }
  const [classesBtnArrow, setClassesBtnArrow] = useState(false)
  const [sideBarBtn, setSideBarBtn] = useState(false)
  const handleClick = () => {
    setClassesBtnArrow((prevState) => !prevState)
  }
  const handleSideBar = () => {
    setSideBarBtn((prevState) => !prevState)
  }

  return (
    <nav className=' sticky top-0 max-h-[90px] z-[2]'>
      <div className='flex items-center gap-3 p-5 absolute bg-white-default shadow-md top-0 w-full h-full z-10'>
        <img
          src={pokedex_logo}
          className='h-[50px] w-[50px] select-none rotate-12'
        />
        <h1 className=' text-4xl select-none ml-2 font-kanit bg-gradient-to-r from-slate-800 to-gray-600 bg-clip-text text-transparent'>
          {NAV_CONTENT.WEB_TITLE}
        </h1>
        <button className={`absolute right-10`} onClick={handleSideBar}>
          <SideBarIcon />
        </button>
      </div>
      <div
        className={` bg-white-default relative p-[20px] duration-500 shadow-md ${
          classesBtnArrow
            ? 'translate-y-[90px]'
            : 'translate-y-[calc(-100%_+_90px)]'
        }`}
      >
        <ul className=' m-2 flex flex-wrap justify-center'>
          <TypeButton />
        </ul>
        <button
          onClick={handleClick}
          className={` flex items-center justify-center rounded-b-md shadow-md absolute bottom-[-39px] h-[40px] w-[50px] z-20 bg-white-default rounded-t-none [&_svg]:duration-500 [&_svg]:pointer-events-none ${
            classesBtnArrow ? '[&_svg]:rotate-[-90deg]' : '[&_svg]:rotate-90'
          }`}
        >
          <Arrow />
        </button>
      </div>
    </nav>
  )
}
