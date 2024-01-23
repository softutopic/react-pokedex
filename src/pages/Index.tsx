import { Link } from "react-router-dom";
import CompleteBanner from "../assets/BannerComplete.png";

export const Index = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-bl from-[#F5DB13] via-[#F5DB13] to-[#F2B807] flex flex-row justify-between items-center center">
      <div className="flex flex-col justify-between w-[516px] h-[557px] lg:ml-[20%] overflow-hidden">
        <h1 className="text-[72px]">
          <span className="font-bold">Find</span> all your favorite{" "}
          <span className="font-bold">Pokemon</span>
        </h1>
        <p className="text-[32px]">
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </p>
        <Link
          to="pokedex"
          type="button"
          className="flex text-[#212121] bg-[#73D677] font-[700] rounded-[11px] text-[23px] px-5 py-2.5 me-2 mb-2 w-[231px] h-[66px] [box-shadow:0px_-9px_0px_0px_rgba(0,_0,_0,_0.18)_inset] border-[0] focus:border-[0] focus:outline-none items-center justify-center"
        >
          See pokemons
        </Link>
      </div>

      <img src={CompleteBanner} alt="Pikachu Image" className="w-[40%]" />
    </div>
  );
};
