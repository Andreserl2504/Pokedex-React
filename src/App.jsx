import { Nav } from './components/nav'
import { Pokemon } from './components/Pokemon'
import { Footer } from './components/Footer'
import { PokemonProvider } from './context/Pokemon'
import { FilterProvider } from './context/Filters'
import { SideBar } from './components/SideBar'
import { SideBarProvider } from './context/SideBar'

export function App() {
  return (
    <>
      <FilterProvider>
        <PokemonProvider>
          <SideBarProvider>
            <Nav />
            <SideBar />
          </SideBarProvider>
          <Pokemon />
        </PokemonProvider>
      </FilterProvider>
      <Footer />
    </>
  )
}
