import { Outlet } from "react-router-dom"

import GlobalContextProvider from "context/GlobalContext"

import Cabecera from "components/Cabecera"
import Pie from "components/Pie"
import ModalZoom from "components/ModalZoom"

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <GlobalContextProvider>
                <Outlet />
                <ModalZoom />
            </GlobalContextProvider>
            <Pie />
        </main>
    )
}

export default PaginaBase