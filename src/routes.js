import { BrowserRouter, Route, Routes } from "react-router-dom"

import PaginaBase from "pages/PaginaBase"
import Inicio from "pages/Inicio"

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} >
                    <Route index element={<Inicio />} ></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes