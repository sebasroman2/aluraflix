import { Outlet } from "react-router-dom"

import Cabecera from "components/Cabecera"
import Pie from "components/Pie"
import VideosProvider from "context/videos"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <VideosProvider>
                <Outlet />
            </VideosProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase