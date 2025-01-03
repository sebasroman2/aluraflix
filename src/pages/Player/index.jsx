import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { GlobalContext } from 'context/GlobalContext';

import NotFound from 'pages/NotFound';

import styles from './Player.module.css';

function Player() {
    const { state } = useContext(GlobalContext);
    const parametros = useParams();

    const video = state.listaDeVideos.find((video) => String(video.id) === parametros.id)

    if (!video) return <NotFound />

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>{video.titulo}</h1>
                <p>{video.descripcion}</p>
            </div>
            <div className={styles.video}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Player