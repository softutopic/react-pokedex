import React from "react";
import { useEffect, useState } from "react";
import { PokemonContext } from "../components/IContextProps";

export const ModalWindow = ({
  dataUrl,
  name,
}: {
  dataUrl: string;
  name: string;
}) => {
  const [data, setData] = useState<any>();
  const [dataSpecie, setDataSpecie] = useState<any>();
  const [dataGeneration, setDataGeneration] = useState<any>();
  const { setOpen } = React.useContext(PokemonContext);

  //Api Calls
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataUrl);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataSpecie = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${name.toLowerCase()}`
        );
        const data = await response.json();
        setDataSpecie(data);

        const response1 = await fetch(data.generation.url);
        const data1 = await response1.json();
        setDataGeneration(data1);
      } catch (error) {
        console.error("Error fetching 2:", error);
      }
    };

    fetchData();
    fetchDataSpecie();
  }, []);

  // Return colors
  function badgeColors(type: string) {
    switch (type) {
      case "stile":
      case "dark":
      case "rock":
        return "#A1A1A1";
      case "grass":
      case "bug":
        return "#70A83B";
      case "ice":
      case "water":
        return "#A2CFF0";
      case "fire":
      case "fighting":
      case "dragon":
        return "#F76545";
      case "normal":
      case "gosth":
        return "#76AADB";
      case "posion":
      case "fairy":
      case "psychic":
      case "ghost":
        return "#A974BC";
      case "ground":
        return "#9B897B";
      case "electric":
        return "#F7C545";

      default:
        return "#76AADB";
    }
  }

  //Retun List Abilities
  const listAbilites = (obj: []) => {
    let list = "";
    obj.map(
      ({ ability }: { ability: any }) =>
        (list = list + " - " + ability.name.replace("-", " "))
    );
    return list.replace("-", "");
  };

  const pokemonStats = (search: string) => {
    let res: number = 0;
    data.stats.map((stat: any) => {
      if (stat.stat.name === search) res = stat.base_stat as number;
    });

    return res;
  };

  return (
    data &&
    dataGeneration &&
    dataSpecie && (
      <div className="flex flex-col md:flex-row h-full">
        <div className="h-[35%] w-full md:w-[45%] md:h-full flex flex-col justify-center md:justify-evenly">
          <div
            className="absolute top-2 left-2 md:hidden"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={5}
              stroke="#212121"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full text-center mt-20 md:mt-0">
            <h1 className=" text-[36px] text-[#FDFDFD] font-[700] [text-shadow:4px_4px_4px_rgba(33,_33,_33,_0.10)]">
              {name}
            </h1>
          </div>

          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="object-contain h-[80%] z-0 mt-3"
          />
        </div>

        <div className="flex flex-col h-[65%] md:w-[55%] md:h-full bg-gradient-to-b from-[rgba(0,_0,_0,_0.4)] via-[rgba(0,_0,_0,_0.4)] to-[transparent] rounded-2xl md:rounded-none px-3 gap-3 md:justify-evenly">
          <div className="pt-10 md:hidden"></div>
          <div className="w-full flex flex-row">
            <div className="w-[50%] flex flex-row gap-3 items-center">
              <div className="w-[41px] h-[41px] rounded-full bg-[#F2CB07] flex justify-center items-center">
                <p className="text-[16px] font-[500]">{dataSpecie.id}</p>
              </div>
              <p className="text-[#FDFDFD] text-center text-[16px] leading-[normal] font-[500]">
                {dataGeneration.names.map((name: any) => {
                  return name.language.name === "en" ? name.name : "";
                })}
              </p>
            </div>
            <div className="flex flex-row justify-end w-[50%]">
              {data.types.map((type: any, index: number) => {
                return (
                  <div
                    className="flex text-[#212121] font-[400] rounded-full text-[12px] px-5 py-1 me-2 mb-2 w-[74px] [box-shadow:0px_-5px_0px_0px_rgba(0,_0,_0,_0.18)_inset] border-[0] focus:border-[0] focus:outline-none items-center justify-center"
                    style={{
                      backgroundColor: badgeColors(type.type.name),
                    }}
                    key={index}
                  >
                    {type.type.name.replace(
                      /(^\w{1})|(\s+\w{1})/g,
                      (letter: string) => letter.toUpperCase()
                    ) ?? ""}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col p-[16px] bg-white rounded-md w-full">
            <p className="text-black text-[16px] font-[500]">Abilities</p>
            <p className="text-black text-[16px] font-[500]">
              {listAbilites(data.abilities)}
            </p>
          </div>

          <div className="p-[16px] bg-white rounded-md w-full flex flex-col gap-3">
            <div className="w-full">
              <p className="text-black text-[16px] font-[500]">
                Healthy Points
              </p>
              <p className="text-black text-[16px] font-[500]">
                {pokemonStats("hp")}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-[6px] dark:bg-gray-700">
                <div
                  className="bg-[#64d368] h-[6px] rounded-full"
                  style={{ width: `${pokemonStats("hp") / 2}%` }}
                ></div>
              </div>
            </div>
            <div className="w-full">
              <p className="text-black text-[16px] font-[500]">Experience</p>
              <p className="text-black text-[16px] font-[500]">
                {pokemonStats("xp")}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-[6px] dark:bg-gray-700">
                <div
                  className="bg-[#f5db13] h-[6px] rounded-full"
                  style={{ width: `${pokemonStats("xp") / 2}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-1">
            <div className="p-[8px] bg-white rounded-md flex flex-col gap-2 justify-center items-center w-[7rem] h-fit">
              <div className="w-[35px] h-[35px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("defense")}
                </p>
              </div>
              <p className="text-[#212121] text-[11px] font-[500]">Defense</p>
            </div>
            <div className="p-[8px] bg-white rounded-md flex flex-col gap-2 justify-center items-center w-[7rem] h-fit">
              <div className="w-[35px] h-[35px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("attack")}
                </p>
              </div>
              <p className="text-[#212121] text-[11px] font-[500]">Attack</p>
            </div>
            <div className="p-[8px] bg-white rounded-md flex flex-col gap-2 justify-center items-center w-[7rem] h-fit">
              <div className="w-[35px] h-[35px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("special-attack")}
                </p>
              </div>
              <p className="text-[#212121] text-[11px] font-[500]">Sp attack</p>
            </div>
            <div className="p-[8px] bg-white rounded-md flex flex-col gap-2 justify-center items-center w-[7rem] h-fit">
              <div className="w-[35px] h-[35px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("special-defense")}
                </p>
              </div>
              <p className="text-[#212121] text-[11px] font-[500]">
                Sp defense
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
