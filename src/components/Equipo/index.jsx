import Card from 'components/Card';

import styles from './Equipo.module.css';

function Equipo(props) {
  const { nombre, color } = props.equipo;
  const { videos, eliminarVideo } = props;

  return (
    <>
      {videos.length > 0 && <>
        <h3 className={styles.titulo} style={{ backgroundColor: `${color}` }}>{nombre}</h3>
        <div className={styles.container}>
          <div className={styles.videos}>
            {
              videos.map((video) => (
                <Card
                  {...video}
                  color={color}
                  key={video.id}
                  eliminarVideo={eliminarVideo}
                />
              ))
            }
          </div>
        </div>
      </>}
    </>
  )   
}

export default Equipo