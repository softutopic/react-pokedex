export const PokemonCard = ({
  url,
  pokemonName,
  backcolor = "#fff",
}: {
  url: string;
  pokemonName: string;
  backcolor: string;
}) => {
  return (
    <div className="group flex flex-row [box-shadow:4px_4px_4px_0px_rgba(33,_33,_33,_0.10)] bg-[#F6F7F9] rounded-[8px] h-[150px] overflow-hidden">
      {/* Pokemon name */}
      <div className="w-[40%] h-full flex flex-row items-center justify-center overflow-hidden">
        <h1 className=" text-[#000] text-[18px] font-[700] [text-shadow:4px_4px_4px_rgba(33,_33,_33,_0.10)]">
          {pokemonName}
        </h1>
      </div>
      {/* Pokemon Image */}
      <div
        className={`w-[60%] h-full flex items-start justify-center`}
        style={{
          backgroundColor: backcolor,
        }}
      >
        <img
          src={url}
          alt="Pokemon"
          className=" h-full group-hover:rotate-6 group-hover:scale-[1.5] ease-in-out duration-500"
        />
      </div>
    </div>
  );
};
