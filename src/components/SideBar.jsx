import { useContext } from 'react'
import { SideBarContext } from '../context/SideBar'
import { MoonIcon, SunIcon } from './icons/icons'
import { WithoutPokemon } from './SidebarComponents/WithoutPokemon'
import { WithPokemon } from './SidebarComponents/WithPokemon'

export function SideBar() {
  const { sideBarBtn, darkMode, handleDarkMode, pokemonInTeam, deletePokemon } =
    useContext(SideBarContext)
  return (
    <aside
      className={` flex flex-col justify-between dark:bg-gray-darkMode w-96 min-h-[calc(100vh-90px)] z-10  bg-gray-10 fixed right-0 shadow-lg duration-500 
                    p-10
                    ${sideBarBtn ? 'translate-x-0' : 'translate-x-[100%]'}`}
    >
      <main>
        {pokemonInTeam.length >= 1 ? (
          <WithPokemon
            teamPokemonInfo={pokemonInTeam}
            deletePokemon={deletePokemon}
          />
        ) : (
          <WithoutPokemon />
        )}
      </main>
      <section className=' flex flex-col relative gap-5'>
        <div className=' flex flex-row  w-full [&_button]:w-full [&_button]:bg-solidGray-default [&_button]:shadow-md [&_button]:duration-200 [&_button]:text-white-default [&_button]:p-2 hover:[&_button]:bg-solidGray-10'>
          <button className=' rounded-l-md'>Sign up</button>
          <button className=' rounded-r-md'>Sign in</button>
        </div>
        <button className=' bg-solidGray-default p-5 text-white-default w-full rounded-md duration-200 shadow-md hover:bg-solidGray-10'>
          Save Team
        </button>
        <div className='dark:text-white-default w-full  flex flex-row items-center gap-5'>
          <button
            onClick={handleDarkMode}
            className={` w-10 h-10 flex justify-center
            items-center rounded-md bg-white-default dark:bg-black-darkMode`}
          >
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>
      </section>
    </aside>
  )
}
