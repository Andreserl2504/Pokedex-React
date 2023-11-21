import { useState } from 'react'
import { TypeButton } from './TypeButton'
import pokedex_logo from '../assets/IMG/pokedex_logo.png'
import arrow from '../assets/SVG/arrow.svg'

export function Nav({ filter }) {
    const [classesBtnArrow, setClassesBtnArrow] = useState(false)
    const handleClick = () => {
        if (classesBtnArrow) setClassesBtnArrow(false)
        else setClassesBtnArrow(true)
    }

    return(
            <nav className="nav">
                <div className="logo-container">
                    <img src={ pokedex_logo } className="pokedex-logo"/>
                    <h1 className="pokedex-title">Project Pokedex</h1> 
                </div>
                <div className={`nav-list-container ${classesBtnArrow ? 'open' : ''}`} id="navListContainer">
                    <ul className='nav-list'>
                        <TypeButton filter={ filter }/>
                    </ul>
                    <button onClick={handleClick} className={`btn-arrow ${classesBtnArrow ? 'rotate' : ''}`} id="btnArrow"><img src={arrow} className="arrow" id="arrow"/></button>
                </div>
            </nav>
    )
}

// ${classesBtnArrow[0]} ${classesBtnArrow[1]}