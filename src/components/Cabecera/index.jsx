import { useLocation } from "react-router-dom";

import CabeceraLink from "components/CabeceraLink"

import styles from "./Cabecera.module.css"

import logo from "./logo.png"
import { AddCircleOutline, HomeOutlined } from "@mui/icons-material";

function Cabecera() {
    const location = useLocation();
    
    return (
        <header className={styles.cabecera}>
            <img src={logo} alt="Logo de AluraFlix" />
            <nav>
                <CabeceraLink
                    url="/"
                    location={location}
                    icono={<HomeOutlined fontSize="inheriti" />}
                >
                    Home
                </CabeceraLink>
                <CabeceraLink
                    url="/nuevo"
                    location={location}
                    icono={<AddCircleOutline />}
                >
                    Nuevo video
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera