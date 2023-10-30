export const ImgTypes = ( types ) => {
    return(
       
            types.Types.length > 1 ?
                <>
                    <img 
                        title={types.Types[0].type.name.charAt(0).toUpperCase() + types.Types[0].type.name.slice(1)} 
                        src={`/src/assets/SVG/pokemon_types/Pokemon_Type_Icon_${types.Types[0].type.name}.svg`} alt="" /> 
                    <img 
                        title={types.Types[1].type.name.charAt(0).toUpperCase() + types.Types[1].type.name.slice(1)} 
                        src={`/src/assets/SVG/pokemon_types/Pokemon_Type_Icon_${types.Types[1].type.name}.svg`} alt="" />
                </>
            :
                <img 
                    title={types.Types[0].type.name.charAt(0).toUpperCase() + types.Types[0].type.name.slice(1)} 
                    src={`/src/assets/SVG/pokemon_types/Pokemon_Type_Icon_${types.Types[0].type.name}.svg`} alt="" />    
    )
}