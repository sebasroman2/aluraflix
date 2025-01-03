import { Outlet } from "react-router-dom"

import Cabecera from "components/Cabecera"
import Pie from "components/Pie"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <Outlet />
            <Pie />
        </main>
    )
}

export default PaginaBase