import { useState } from "react";
import ReactModal from "react-modal";

import { ModalWindow } from "../pages/ModalWindow";
import { PokemonContext } from "./IContextProps";

export const PokemonCard = ({
  imageUrl,
  pokemonName,
  backcolor = "#fff",
  dataUrl,
}: {
  imageUrl: string;
  pokemonName: string;
  backcolor?: string;
  dataUrl: string;
}) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  return (
    <>
      <PokemonContext.Provider value={{ open: open, setOpen: setOpen }}>
        <div
          className="group flex flex-row [box-shadow:4px_4px_4px_0px_rgba(33,_33,_33,_0.10)] bg-[#F6F7F9] rounded-[8px] h-[150px] overflow-hidden"
          onClick={() => handleClick()}
        >
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
              src={imageUrl}
              alt="Pokemon"
              className=" h-full group-hover:rotate-6 group-hover:scale-[1.5] ease-in-out duration-500"
            />
          </div>
        </div>
        <ReactModal
          id="customModal"
          isOpen={open}
          contentLabel="Hola"
          appElement={document.getElementById("root") as HTMLElement}
          onRequestClose={() => setOpen(false)}
          style={{
            overlay: {
              justifyContent: "center",
            },
            content: {
              padding: "0%",
              border: "0",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: backcolor,
              outline: "none",
            },
          }}
        >
          <ModalWindow dataUrl={dataUrl} name={pokemonName} />
        </ReactModal>
      </PokemonContext.Provider>
    </>
  );
};
