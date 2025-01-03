import { BrowserRouter, Route, Routes } from "react-router-dom"

import PaginaBase from "pages/PaginaBase"
import Inicio from "pages/Inicio"
import Nuevo from "pages/Nuevo"
import Player from "pages/Player"
import NotFound from "pages/NotFound"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />} ></Route>
                    <Route path="nuevo" element={<Nuevo />} ></Route>
                    <Route path=":id" element={<Player />} ></Route>
                    <Route path="*" element={<NotFound />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes