import React from "react";
import { Dispatch, SetStateAction } from "react";

interface IContextProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const PokemonContext =
  // __preserveRef("CountContext", React.createContext<any>(null));
  React.createContext({} as IContextProps);
