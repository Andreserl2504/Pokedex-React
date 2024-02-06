import pokedex_logo from '../assets/IMG/pokemon_logo.png'
import { Arrow, Plus } from './icons/icons'
import { SideBarIcon } from './icons/icons'
import { useState } from 'react'
import { TypeButton } from './TypeButton'
import { useContext } from 'react'
import { SideBarContext } from '../context/SideBar'

export function Nav() {
  const NAV_CONTENT = {
    WEB_TITLE: 'Pokedex'
  }
  const { sideBarBtn, handleSideBar, pokemonInTeam } =
    useContext(SideBarContext)
  const [classesBtnArrow, setClassesBtnArrow] = useState(false)
  const handleClick = () => {
    setClassesBtnArrow((prevState) => !prevState)
  }

  return (
    <nav className=' sticky top-0 max-h-[90px] z-[2]'>
      <div className=' dark:bg-black-darkMode flex items-center gap-3 p-5 absolute bg-white-default shadow-md top-0 w-full h-full z-10'>
        <img
          src={pokedex_logo}
          className='h-[50px] w-[50px] select-none rotate-12 dark:border-2 rounded-full'
        />
        <h1 className='dark:bg-gradient-to-r dark:from-slate-100 dark:to-gray-400   text-4xl select-none ml-2 font-kanit bg-gradient-to-r from-slate-800 to-gray-600 bg-clip-text text-transparent'>
          {NAV_CONTENT.WEB_TITLE}
        </h1>
        <button
          className={`${
            sideBarBtn
              ? '[&_svg]:rotate-45 [&_svg]:w-10 [&_svg]:h-10 dark:[&_svg]:fill-white-default'
              : 'dark:[&_svg_path]:stroke-white-default'
          } flex justify-center items-center absolute right-10 `}
          onClick={handleSideBar}
        >
          <span className=' text-justify bg-solidGray-default h-5 w-5 text-white-default rounded-full absolute translate-x-7 translate-y-[-15px] z-10'>
            {pokemonInTeam.length}
          </span>
          {sideBarBtn ? <Plus /> : <SideBarIcon />}
        </button>
      </div>
      <div
        className={` bg-white-default relative p-[20px] duration-500 shadow-md dark:bg-solidGray-darkMode ${
          classesBtnArrow
            ? 'translate-y-[90px]'
            : 'translate-y-[calc(-100%_+_90px)]'
        }`}
      >
        <ul className=' m-2 flex flex-wrap justify-center '>
          <TypeButton />
        </ul>
        <button
          onClick={handleClick}
          className={` dark:bg-solidGray-darkMode dark:[&_svg]:fill-white-default flex items-center justify-center rounded-b-md shadow-md absolute bottom-[-39px] h-[40px] w-[50px] z-20 bg-white-default rounded-t-none [&_svg]:duration-500 [&_svg]:pointer-events-none ${
            classesBtnArrow ? '[&_svg]:rotate-[-90deg]' : '[&_svg]:rotate-90'
          }`}
        >
          <Arrow />
        </button>
      </div>
    </nav>
  )
}
