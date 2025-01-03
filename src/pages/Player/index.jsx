import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFound from 'pages/NotFound';

import styles from './Player.module.css';

function Player() {
    const [video, setVideo] = useState({});
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/sebasroman2/aluraflix/videos?id=${parametros.id}`)
            .then((response) => response.json())
            .then((data) => setVideo(...data));
    }, [parametros.id])

    console.log(video.video);

    if (!video) return <NotFound />

    return (
        <div className={styles.container}>
            <iframe
                width="560"
                height="315"
                src={video.video} 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Player