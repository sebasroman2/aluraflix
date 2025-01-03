import { useContext } from "react";

import { GlobalContext } from "context/GlobalContext";

const useEditarModal = () => {
    const { state, dispatch } = useContext(GlobalContext);
    
    const videoSeleccionado = state.videoSeleccionado;
    const modalAbierto = state.modalAbierto;

    const abrirModal = (video) => {
        dispatch({ type: 'SET_VIDEO_SELECCIONADO', payload: video })
    }

    const cerrarModal = () => {
        dispatch({ type: 'SET_VIDEO_SELECCIONADO', payload: null })
    }

    return { videoSeleccionado, modalAbierto, abrirModal, cerrarModal }
}

export { useEditarModal }