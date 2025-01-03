import { useContext } from "react";

import { GlobalContext } from "context/GlobalContext";

import { useEditarEquipos } from "hooks/useEditarEquipos";
import { useEditarModal } from "hooks/useEditarModal";

import Banner from "components/Banner"
import Equipo from "components/Equipo"
import Titulo from "components/Titulo"
import Cargando from "components/Cargando";

import styles from "./Inicio.module.css";

function Inicio() {
    const { state } = useContext(GlobalContext);
    const { eliminarVideo } = useEditarEquipos();
    const { abrirModal } = useEditarModal();

    return (
        state.listaDeEquipos.length === 0 ? <Cargando /> :
            <div className={ styles.container }>
                <Banner>
                    <Titulo />
                </Banner>
                {state.listaDeEquipos.map((equipo) =>
                    <Equipo
                        key={equipo.id}
                        equipo={equipo}
                        videos={state.listaDeVideos.filter(video => video.categoria === equipo.nombre)}
                        eliminarVideo={eliminarVideo}
                        abrirModal={abrirModal}
                    />
                )}
            </div>
    )
}

export default Inicio