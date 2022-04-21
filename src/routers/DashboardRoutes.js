import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { Heroe } from "../components/heroe/Heroe";

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-3">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="heroe" element={<Heroe />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>

        </>
    )
}
