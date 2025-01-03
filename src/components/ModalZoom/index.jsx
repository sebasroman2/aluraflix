import { useContext } from "react";
import { useEditarModal } from "hooks/useEditarModal";

import { GlobalContext } from "context/GlobalContext";

import { useEditarEquipos } from "hooks/useEditarEquipos";

import styles from "./ModalZoom.module.css";

import { CancelOutlined } from "@mui/icons-material";
import Formulario from "components/Formulario";

const ModalZoom = () => {
    const { state } = useContext(GlobalContext);
    
    const { modalAbierto, videoSeleccionado, cerrarModal } = useEditarModal();
    const { actualizarVideo } = useEditarEquipos();

    const handleSubmit = (data) => actualizarVideo(data);

    if (modalAbierto) {
        document.body.style.setProperty('overflow', 'hidden')
    } else {
        document.body.style.setProperty('overflow', 'auto');
    }

    return (
        <>
            {modalAbierto && <>
                <div className={styles.overlay}>
                    <dialog
                        open={!!videoSeleccionado}
                        onClose={() => cerrarModal()}
                        className={styles.dialog}
                    >
                        <form className={styles.formulario} method="dialog">
                            <button formMethod="dialog">
                                <CancelOutlined fontSize="large" />
                            </button>
                        </form>
                        <div className={styles.edicion}>
                            <h1>Editar card:</h1>
                            <Formulario
                                handleSubmit={handleSubmit}
                                equipos={state.listaDeEquipos}
                            />
                        </div>
                    </dialog>
                </div>
            </>}
        </>
    )
}

export default ModalZoom;