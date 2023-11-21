export function TypeButton({ filter }) {
    const pokemonTypes = [  'normal','fire','water','grass','ground','rock','poison',
                            'bug','electric','flying','fighting','ice',
                            'steel','dark','ghost','psychic','fairy','dragon']
    
    return (
        <>
            {
                pokemonTypes.map(type => (
                    <li key={type} className="nav-item">
                        <button className={`btn btn-header ${type}`} onClick={ filter }>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    </li>
                ))
            }  
        </>
    )
}