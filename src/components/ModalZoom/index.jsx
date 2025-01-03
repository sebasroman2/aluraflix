import { useEditarModal } from "hooks/useEditarModal";

import styles from "./ModalZoom.module.css";
import { CancelOutlined } from "@mui/icons-material";

const ModalZoom = () => {
    const { modalAbierto, videoSeleccionado, cerrarModal } = useEditarModal();

    return (
        <>
            {modalAbierto && <>
                <div className={styles.overlay}>
                    <dialog
                        open={!!videoSeleccionado}
                        onClose={() => cerrarModal()}
                        className={styles.dialog}
                    >
                        <img src={videoSeleccionado.imagen} alt="Video seleccionado" />
                        <form method="dialog">
                            <button formMethod="dialog">
                                <CancelOutlined fontSize="large" />
                            </button>
                        </form>
                    </dialog>
                </div>
            </>}
        </>
    )
}

export default ModalZoom;