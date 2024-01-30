import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Index } from "./pages/Index";
import { Pokedex } from "./pages/Pokedex";
import { ErrorPage } from "./pages/ErrorPage";
// import React, { useState, Dispatch, SetStateAction } from "react";

// interface IContextProps {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
// }

// export const UserContext = React.createContext({} as IContextProps);

const App = () => {
  // const [open, setOpen] = useState(false);
  return (
    <>
      {/* <UserContext.Provider value={{ open: open, setOpen: setOpen }}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="Legendaries" element={<Pokedex />} />
          <Route path="documentation" element={<Pokedex />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* </UserContext.Provider> */}
    </>
  );
};

export default App;
