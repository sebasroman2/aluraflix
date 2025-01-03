import { useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';

import { useEditarEquipos } from 'hooks/useEditarEquipos';

import Formulario from 'components/Formulario'
import Cargando from 'components/Cargando';

import styles from './Nuevo.module.css'

function Nuevo() {
    const { state } = useContext(GlobalContext);
    const { agregarVideo } = useEditarEquipos();

    const handleSubmit = (data) => agregarVideo(data);

    return (
        state.listaDeEquipos.length === 0 ? <Cargando /> :
            <section className={styles.nuevo}>
                <div className={styles.formulario}>
                    <h1>Nuevo video</h1>
                    <p>Complete el formulario para crear una nueva tarjeta de video</p>
                    <h2>Crear tarjeta</h2>
                    <Formulario handleSubmit={handleSubmit} equipos={state.listaDeEquipos} />
                </div>
            </section>
    )
}

export default Nuevo