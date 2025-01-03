import Banner from "components/Banner"
import Equipo from "components/Equipo"
import Titulo from "components/Titulo"

import data from "data/db.json"

function Inicio() {
    const { equipos, videos } = data

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