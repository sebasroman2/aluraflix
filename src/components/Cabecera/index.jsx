import CabeceraLink from "components/CabeceraLink"

import styles from "./Cabecera.module.css"

import logo from "./logo.png"

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <img src={logo} alt="Logo de AluraFlix" />
            <nav>
                <CabeceraLink url="./" focus>Home</CabeceraLink>
                <CabeceraLink url="./nuevo">Nuevo video</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera