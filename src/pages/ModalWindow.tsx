import { useEffect, useState } from "react";

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
      <div className="flex flex-row">
        <div className="flex flex-col justify-center w-[50%] p-[16px] overflow-hidden">
          <img
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
            className="object-contain"
          />
          <div className="w-full p-5"></div>
          <div className="flex flex-row justify-end">
            {data.types.map((type: any) => {
              return (
                <div
                  className="flex text-[#212121] font-[400] rounded-full text-[12px] px-5 py-1 me-2 mb-2 w-[74px] [box-shadow:0px_-5px_0px_0px_rgba(0,_0,_0,_0.18)_inset] border-[0] focus:border-[0] focus:outline-none items-center justify-center"
                  style={{
                    backgroundColor: badgeColors(type.type.name),
                  }}
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

        <div className="flex flex-col justify-around w-[50%] p-[16px] bg-gradient-to-b from-[rgba(0,_0,_0,_0.4)] via-[rgba(0,_0,_0,_0.4)] to-[transparent]">
          {/* name */}
          <div className="flex flex-row">
            <div className="w-[50%]">
              <h1 className=" text-[36px] text-[#FDFDFD] font-[700] [text-shadow:4px_4px_4px_rgba(33,_33,_33,_0.10)]">
                {name}
              </h1>
            </div>
            <div className="w-[50%] flex flex-row gap-3 items-center">
              <p className="text-[#FDFDFD] text-center text-[24px] not-italic leading-[normal] font-[500]">
                {dataGeneration.names.map((name: any) => {
                  return name.language.name === "en" ? name.name : "";
                })}
              </p>
              <div className="w-[41px] h-[41px] rounded-full bg-[#F2CB07] flex justify-center items-center">
                <p className="text-[16px] font-[500]">{dataSpecie.id}</p>
              </div>
            </div>
          </div>

          {/* abilities */}
          <div className="flex flex-col p-[16px] bg-white rounded-md w-fit">
            <p className="text-black text-[16px] font-[500]">Abilities</p>
            <p className="text-black text-[16px] font-[500]">
              {listAbilites(data.abilities)}
            </p>
          </div>
          {/* Healty */}
          <div className="p-[16px] bg-white rounded-md w-full flex flex-row gap-3">
            <div className="w-[50%]">
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
            <div className="w-[50%]">
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

          {/* Stats */}
          <div className="flex flex-row justify-between">
            <div className="p-[16px] bg-white rounded-md flex flex-col gap-3 justify-center items-center w-[7rem] h-[7rem]">
              <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("defense")}
                </p>
              </div>
              <p className="text-[#212121] text-[12px] font-[500]">Defense</p>
            </div>
            <div className="p-[16px] bg-white rounded-md flex flex-col gap-3 justify-center items-center w-[7rem] h-[7rem]">
              <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("attack")}
                </p>
              </div>
              <p className="text-[#212121] text-[12px] font-[500]">Attack</p>
            </div>
            <div className="p-[16px] bg-white rounded-md flex flex-col gap-3 justify-center items-center w-[7rem] h-[7rem]">
              <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("special-attack")}
                </p>
              </div>
              <p className="text-[#212121] text-[12px] font-[500]">Sp attack</p>
            </div>
            <div className="p-[16px] bg-white rounded-md flex flex-col gap-3 justify-center items-center w-[7rem] h-[7rem]">
              <div className="w-[50px] h-[50px] rounded-full border-[3px] border-[#212121] flex justify-center items-center">
                <p className="text-[#212121] text-[16px] font-[500]">
                  {pokemonStats("special-defense")}
                </p>
              </div>
              <p className="text-[#212121] text-[12px] font-[500]">
                Sp defense
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
