import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: 'Lista de Pokemons',
 description: 'Lista de los 150 primeros pokemons salidos en la PokeApi de 1998',
};

const getPokemons = async (limit = 20,offset=0):Promise<SimplePokemon[]> => {
  
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then( res => res.json())

  const pokemon = data.results.map( pokemons => ({
    id:pokemons.url.split('/').at(-2)!,
    name:pokemons.name,
  })
)
  // throw new Error('Error al cargar los pokemons');
  // throw notFound();
  return pokemon; 
}


export default async function PokemonsPage() {
  const pokemons = await getPokemons(150);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemons <small>Estatico</small></span>

      <PokemonGrid pokemons={pokemons}/>
    
    </div>
  );
}
