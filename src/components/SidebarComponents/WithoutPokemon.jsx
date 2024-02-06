export function WithoutPokemon() {
  return (
    <div className=' w-full border-2 text-center select-none border-white-default rounded-md shadow-md p-5 dark:border-white-darkMode dark:text-white-default'>
      You do not have any pokemon in your team
      <div className=' flex justify-center select-none'>😢</div>
    </div>
  )
}
