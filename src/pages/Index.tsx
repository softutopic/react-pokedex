import { Link } from "react-router-dom";
import CompleteBanner from "../assets/BannerComplete.png";

export const Index = () => {
  return (
    <div className="w-full h-fit md:h-screen bg-gradient-to-bl from-[#F5DB13] via-[#F5DB13] to-[#F2B807] flex flex-col md:flex-row-reverse pt-[20%] md:pt-[5%]">
      <div className="md:flex md:flex-col md:justify-center md:w-[60%] md:items-end">
        <img
          src={CompleteBanner}
          alt="Pikachu Image"
          className="object-contain md:w-[90%]"
        />
      </div>

      <div className="p-[22px] text-center md:text-left flex flex-col justify-center md:items-start md:ml-[10%] md:w-[40%]">
        <h1 className="text-[42px] md:text-[72px]">
          <span className="font-bold">Find</span> all your favorite{" "}
          <span className="font-bold">Pokemon</span>{" "}
        </h1>
        <p className="text-[24px] mt-5 md:text-[32px]">
          You can know the type of Pokemon, its strengths, disadvantages and
          abilities
        </p>
        <div className="p-[22px] md:p-[20px_0_0_0]">
          <Link
            to="pokedex"
            type="button"
            className="flex text-[#212121] bg-[#73D677] font-[700] rounded-[11px] text-[23px] px-5 py-2.5 me-2 mb-2 w-full h-[66px] [box-shadow:0px_-9px_0px_0px_rgba(0,_0,_0,_0.18)_inset] border-[0] focus:border-[0] focus:outline-none items-center justify-center md:w-[231px]"
          >
            See pokemons
          </Link>
        </div>
        <div className="md:hidden py-7"></div>
      </div>
    </div>
  );
};
