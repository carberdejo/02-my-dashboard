import MainFavoritesPage from "@/pokemons/components/PokemonMainFavorites";


export const metadata = {
 title: 'Favoritos',
 description: 'Lista de los 150 primeros pokemons salidos en la PokeApi de 1998',
};




export default async function PokemonsPage() {
  

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons Favoritos <small className="text-red-600">Global State</small></span>

      <MainFavoritesPage/>
    
    </div>
  );
}
