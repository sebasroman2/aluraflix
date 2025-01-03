import { useEffect, useState } from 'react';

import { useVideosContext } from 'context/videos';

import Formulario from 'components/Formulario'

import styles from './Nuevo.module.css'

function Nuevo() {
    const { agregarVideo } = useVideosContext();
    const [equipos, setEquipos] = useState([]);
    
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/sebasroman2/aluraflix/equipos")
            .then((response) => response.json())
            .then((data) => setEquipos(data))
    }, []);

    const handleSubmit = (data) => agregarVideo(data);

    return (
        <section className={styles.nuevo}>
            <div className={styles.formulario}>
                <h1>Nuevo video</h1>
                <p>Complete el formulario para crear una nueva tarjeta de video</p>
                <h2>Crear tarjeta</h2>
                <Formulario handleSubmit={handleSubmit} equipos={equipos} />
            </div>
        </section>
    )
}

export default Nuevo