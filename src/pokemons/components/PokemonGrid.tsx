import { SimplePokemon } from "../interfaces/simple-pokemon"
import { PokemonCard } from "./PokemonCard";

interface Props{
    pokemons:SimplePokemon[];
}
export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
          // <div key={pokemon.id} className="flex flex-col items-center">
          //   <Image
          //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          //     width={100}
          //     height={100}
          //     alt={pokemon.name}
          //   />
          //   <span className="capitalize">{pokemon.name}</span>
          // </div>
        ))}
    </div>
  )
}
