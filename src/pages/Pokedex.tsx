import Palette from "color-thief-react/lib/Palette/Palette.component";
import DropDownCustom from "../components/DropDownCustom";
import { PokemonCard } from "../components/PokemonCard";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

export function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=20"
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
      <div className="mt-[5rem] md:mt-[10rem] w-[80%] h-auto flex flex-col justify-normal items-center pb-[100px]">
        <p className="text-[24px] md:text-[35px] text-center tracking-[3px] text-black">
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
        <div className="hidden px-8 w-full md:flex flex-row gap-[64px] justify-start">
          <DropDownCustom title="Type" />
          <DropDownCustom title="Attack" />
          <DropDownCustom title="Experience" />
        </div>
        <div className="w-auto md:h-[64px]"></div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[34px]">
          {/* Pokemon Card */}
          {pokemonList.map(({ name, url }, index) => (
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
                if (loading)
                  return (
                    <div role="status" className="max-w-sm animate-pulse">
                      <div className="w-full h-[150px] bg-gray-200 rounded-[8px] dark:bg-gray-700 mb-4"></div>
                    </div>
                  );
                const nameStr: string = name;
                setActive(true);
                const cName = nameStr.replace(
                  /(^\w{1})|(\s+\w{1})/g,
                  (letter) => letter.toUpperCase()
                );
                return (
                  <Transition
                    show={active}
                    enter="transition-all ease-in-out duration-900 delay-[200ms]"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <PokemonCard
                      key={index}
                      pokemonName={cName}
                      imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                        index + 1
                      }.svg`}
                      backcolor={data![1]}
                      dataUrl={url}
                    />
                  </Transition>
                );
              }}
            </Palette>
          ))}
        </div>
      </div>
    </div>
  );
}
