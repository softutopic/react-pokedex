import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Index } from "./pages/Index";
import { Pokedex } from "./pages/Pokedex";
import { ErrorPage } from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="pokedex" element={<Pokedex />} />
          <Route path="Legendaries" element={<Pokedex />} />
          <Route path="documentation" element={<Pokedex />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
