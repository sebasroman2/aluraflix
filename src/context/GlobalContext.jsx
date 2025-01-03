import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
    listaDeEquipos: [],
    listaDeVideos: [],
    videoSeleccionado: null,
    modalAbierto: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LISTA_DE_EQUIPOS':
            return { ...state, listaDeEquipos: action.payload };
        case 'SET_LISTA_DE_VIDEOS':
            return { ...state, listaDeVideos: action.payload };
        case 'AGREGAR_VIDEO':
            return { ...state, listaDeVideos: [...state.listaDeVideos, action.payload] };
        case 'ELIMINAR_VIDEO':
            return { ...state, listaDeVideos: state.listaDeVideos.filter(video => video.id !== action.payload) };
        case 'ACTUALIZAR_VIDEO':
            return {
                ...state,
                listaDeVideos: state.listaDeVideos.map(video => video.id === action.payload.id ? action.payload : video)
            }
        case 'SET_VIDEO_SELECCIONADO':
            return {
                ...state,
                videoSeleccionado: action.payload,
                modalAbierto: action.payload != null ? true : false
            }
        default:
            return state;
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://my-json-server.typicode.com/sebasroman2/aluraflix/videos');
            const data = await res.json();
            dispatch({ type: 'SET_LISTA_DE_VIDEOS', payload: data })
        }

        const getTeams = async () => {
            const res = await fetch('https://my-json-server.typicode.com/sebasroman2/aluraflix/equipos');
            const data = await res.json();
            dispatch({ type: 'SET_LISTA_DE_EQUIPOS', payload: data })
        }

        setTimeout(() => getData(), 5000)
        setTimeout(() => getTeams(), 5000)
    }, [])

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider