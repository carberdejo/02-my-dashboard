'use client'
import { PokemonGrid  } from "@/pokemons";

// import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";


export default function MainFavoritesPage() {
  // const data = useAppSelector(state => state.pokemons)
  // const pokemonsArray = Object.values(data);
  const [pokemons, setpokemons] = useState([])

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites-pokemon')?? '{}' );
    setpokemons( Object.values( favorites) );
  }, [])
  

  return (
    <>
      {
        pokemons.length === 0 
          ? (<NoFavorites/>)
          : (<PokemonGrid pokemons={ pokemons }/>)
      }
    </>
  );
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>No favoritos</span>
    </div>
  )
}
