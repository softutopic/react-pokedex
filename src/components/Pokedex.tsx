import Palette from "color-thief-react/lib/Palette/Palette.component";
import DropDownCustom from "./DropDownCustom";
import { PokemonCard } from "./PokemonCard";
import { useEffect, useState } from "react";

export function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=30"
        );
        const { results } = await response.json();
        setPokemonList(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-screen h-auto flex self-center justify-center">
      <div className="mt-[10rem] w-[80%] h-auto flex flex-col justify-normal items-center pb-[100px]">
        <p className="text-[35px] tracking-[3px] text-black">
          800 <span className="font-[700]">Pokemons</span> for you to choose
          your favorite
        </p>
        <div className="w-auto h-[34px]"></div>
        <input
          type="text"
          className="block bg-[#F2F2F2] w-[100%] rounded-full p-4 placeholder:text-[rgba(33,_33,_33,_0.80)] placeholder:text-[16px] [box-shadow:4px_4px_16px_0px_rgba(1,_28,_64,_0.20)] text-black"
          placeholder="Find your favorite pokemon ..."
        />
        <div className="w-auto h-[34px]"></div>
        <div className="px-8 w-full flex flex-row gap-[64px] justify-start">
          <DropDownCustom title="Type" />
          <DropDownCustom title="Attack" />
          <DropDownCustom title="Experience" />
        </div>
        <div className="w-auto h-[64px]"></div>
        <div className="w-full grid grid-cols-3 gap-[34px]">
          {/* Pokemon Card */}
          {pokemonList.map(({ name }, index) => (
            <Palette
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
                index + 1
              }.png`}
              crossOrigin="anonymous"
              format="hex"
              colorCount={4}
              key={index}
            >
              {({ data, loading }) => {
                console.log(data);
                if (loading) return <div>Loading...</div>;
                const nameStr: string = name;
                const cName = nameStr.replace(
                  /(^\w{1})|(\s+\w{1})/g,
                  (letter) => letter.toUpperCase()
                );
                return (
                  <PokemonCard
                    key={index}
                    pokemonName={cName}
                    url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                      index + 1
                    }.svg`}
                    backcolor={data![1]}
                  />
                );
              }}
            </Palette>
          ))}
        </div>
      </div>
    </div>
  );
}
