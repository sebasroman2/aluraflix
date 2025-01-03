import { createContext, useContext, useEffect, useState } from "react";

export const VideosContext = createContext();

VideosContext.displayName = "Videos";

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
            fetch("https://my-json-server.typicode.com/sebasroman2/aluraflix/videos")
                .then((response) => response.json())
                .then((data) => setVideos(data))
    }, []);
    
    return (
        <VideosContext.Provider value={{ videos, setVideos }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext() {
    const { videos, setVideos } = useContext(VideosContext);
    
    function agregarVideo(nuevoVideo) { return setVideos([...videos, nuevoVideo]) }

    function eliminarVideo(id) {
        const nuevosVideos = videos.filter(video => video.id !== id);
        setVideos(nuevosVideos);
    }
    
    return { videos, agregarVideo, eliminarVideo };
}