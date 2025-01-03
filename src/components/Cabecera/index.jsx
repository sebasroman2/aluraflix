import { useLocation } from "react-router-dom";

import CabeceraLink from "components/CabeceraLink"

import styles from "./Cabecera.module.css"

import logo from "./logo.png"

function Cabecera() {
    const location = useLocation();
    
    return (
        <header className={styles.cabecera}>
            <img src={logo} alt="Logo de AluraFlix" />
            <nav>
                <CabeceraLink url="/" location={location}>Home</CabeceraLink>
                <CabeceraLink url="/nuevo" location={location}>Nuevo video</CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera