import { useEffect, useState } from "react";

import Banner from "components/Banner"
import Equipo from "components/Equipo"
import Titulo from "components/Titulo"

function Inicio() {
    const [equipos, setEquipos] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/sebasroman2/aluraflix/equipos")
            .then((response) => response.json())
            .then((data) => setEquipos(data))
    }, []);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/sebasroman2/aluraflix/videos")
            .then((response) => response.json())
            .then((data) => setVideos(data))
    }, []);

    return (
        <>
            <Banner>
                <Titulo />
            </Banner>
            {equipos.map((equipo) =>
                <Equipo
                    key={equipo.id}
                    equipo={equipo}
                    videos={videos.filter(video => video.categoria === equipo.nombre)}
                />
            )}
        </>
    )
}

export default Inicio