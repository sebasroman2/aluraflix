import { useContext } from "react";

import { GlobalContext } from "context/GlobalContext";

const useEditarEquipos = () => {
    const { state, dispatch } = useContext(GlobalContext);
    
    function agregarVideo(nuevoVideo) { dispatch({ type: 'AGREGAR_VIDEO', payload: nuevoVideo}) }

    function eliminarVideo(id) { dispatch({ type: 'ELIMINAR_VIDEO', payload: id }) }

    return { agregarVideo, eliminarVideo, listaDeVideos: state.listaDeVideos };
}

export { useEditarEquipos }