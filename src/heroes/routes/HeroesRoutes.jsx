import { Routes, Route } from "react-router-dom";
import { Navbar } from "../../shared";
import { MarvelScreen } from "../pages/MarvelScreen";
import { SearchScreen } from "../pages/SearchScreen";
import { DcScreen } from "../pages/DcScreen";
import { Heroe } from "../pages/Heroe";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="heroe/:id" element={<Heroe />} />
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
