import grass from '../../public/pokemon_types/Pokemon_Type_Icon_Grass.png'
import bug from '../../public/pokemon_types/Pokemon_Type_Icon_Bug.png'
import water from '../../public/pokemon_types/Pokemon_Type_Icon_Water.png'
import fire from '../../public/pokemon_types/Pokemon_Type_Icon_Fire.png'
import ghost from '../../public/pokemon_types/Pokemon_Type_Icon_Ghost.png'
import dragon from '../../public/pokemon_types/Pokemon_Type_Icon_Dragon.png'
import fairy from '../../public/pokemon_types/Pokemon_Type_Icon_Fairy.png'
import ground from '../../public/pokemon_types/Pokemon_Type_Icon_Ground.png'
import rock from '../../public/pokemon_types/Pokemon_Type_Icon_Rock.png'
import electric from '../../public/pokemon_types/Pokemon_Type_Icon_Electric.png'
import fighting from '../../public/pokemon_types/Pokemon_Type_Icon_Fighting.png'
import flying from '../../public/pokemon_types/Pokemon_Type_Icon_Flying.png'
import normal from '../../public/pokemon_types/Pokemon_Type_Icon_Normal.png'
import ice from '../../public/pokemon_types/Pokemon_Type_Icon_Ice.png'
import steel from '../../public/pokemon_types/Pokemon_Type_Icon_Steel.png'
import poison from '../../public/pokemon_types/Pokemon_Type_Icon_Poison.png'
import psychic from '../../public/pokemon_types/Pokemon_Type_Icon_Psychic.png'
import dark from '../../public/pokemon_types/Pokemon_Type_Icon_Dark.png'

export const ImgTypes = (types) => {
  const { Types } = types
  const typesImgs = Array.from({ length: Types.length }, (_, i) => {
    if (Types[i] === 'Grass') return grass
    else if (Types[i] === 'Bug') return bug
    else if (Types[i] === 'Water') return water
    else if (Types[i] === 'Fire') return fire
    else if (Types[i] === 'Ghost') return ghost
    else if (Types[i] === 'Dragon') return dragon
    else if (Types[i] === 'Fairy') return fairy
    else if (Types[i] === 'Ground') return ground
    else if (Types[i] === 'Rock') return rock
    else if (Types[i] === 'Electric') return electric
    else if (Types[i] === 'Fighting') return fighting
    else if (Types[i] === 'Flying') return flying
    else if (Types[i] === 'Normal') return normal
    else if (Types[i] === 'Ice') return ice
    else if (Types[i] === 'Steel') return steel
    else if (Types[i] === 'Poison') return poison
    else if (Types[i] === 'Psychic') return psychic
    else if (Types[i] === 'Dark') return dark
    else return
  }).filter((type) => !!type)

  return (
    Array.isArray(typesImgs) && (
      <>
        {typesImgs.map((type, i) => (
          <img key={Types[i]} title={Types[i]} src={type} alt={Types[i]} />
        ))}
      </>
    )
  )
}
