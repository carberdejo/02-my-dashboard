'use client'
import Link from "next/link"
import Image from "next/image"
import { SimplePokemon } from "../interfaces/simple-pokemon"
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const { id, name } = pokemon;
  const isFavorite = useAppSelector(state => !!state.pokemons[id])
  const dispatch = useAppDispatch();

  const onToggle = () => {
    dispatch(toggleFavorite(pokemon));
  }

  return (
    <div className="mx-auto w-72 bg-red-600 rounded-xl shadow-2xl overflow-hidden border-4 border-black">
      
      {/* Encabezado estilo Pokédex */}
      <div className="bg-red-700 flex items-center justify-between px-4 py-2 border-b-4 border-black">
        <span className="text-xs text-white font-bold uppercase tracking-widest">Pokédex</span>
        <div className="flex gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 border-2 border-white"></div>
          <div className="w-3 h-3 rounded-full bg-green-400 border-2 border-white"></div>
        </div>
      </div>

      {/* Pantalla de Pokémon */}
      <div className="bg-gray-100 p-5 flex flex-col items-center border-b-4 border-black">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          width={120}
          height={120}
          alt={name}
          className="drop-shadow-md"
        />
        <p className="mt-3 text-lg font-bold capitalize text-gray-800">{name}</p>
        <span className="text-xs text-gray-500">ID: #{id}</span>
      </div>

      {/* Botón Más Información */}
      <div className="bg-gray-200 flex justify-center py-3 border-b-4 border-black">
        <Link
          href={`/dashboard/pokemons/${name}`}
          className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-700 transition"
        >
          Más Información
        </Link>
      </div>

      {/* Sección de Favoritos */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 cursor-pointer px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
      >
        <div className="text-red-600 text-xl">
          {isFavorite ? <IoHeart /> : <IoHeartOutline />}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-700">
            {isFavorite ? 'Es favorito' : 'No es favorito'}
          </p>
          
          <p className="text-xs text-gray-500">Click para cambiar</p>
        </div>
      </div>
    </div>
  )
}
