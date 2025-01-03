import { Button, ButtonGroup } from '@mui/material';
import { BorderColorOutlined, DeleteForeverOutlined } from '@mui/icons-material';

import styles from './Equipo.module.css';

function Equipo(props) {
  const { nombre, color } = props.equipo;
  const { videos } = props;

  const estiloBoton = {
    width: '50%',
    backgroundColor: 'var(--fondo-negro)',
    fontSize: '16px',
    borderRadius: '0 0 15px 15px'
  }
  return (
    <>
      <h3 className={styles.titulo} style={{ backgroundColor: `${color}` }}>{nombre}</h3>
      <div className={styles.videos}>
        {
          videos.map((video) => (
            <div className={styles.contenedor} key={video.id}>
              <div
                className={styles.video}
                style={
                  {
                    borderColor: `${color}`,
                    boxShadow: `inset 0px 0px 10px 5px ${color}bf`
                  }
                }
              >
                <img src={video.imagen} alt={video.titulo} />
              </div>
              <ButtonGroup
                variant="contained"
                aria-label="Basic button group"
                sx={
                  {
                    width: '432px',
                    borderRadius: '0 0 15px 15px',
                    border: `5px solid ${color}`,
                    borderTop: 'none',
                    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                      borderColor: 'var(--fondo-negro)',
                    },
                  }
                }
              >
                <Button
                  startIcon={<DeleteForeverOutlined />}
                  sx={estiloBoton}
                >
                  Borrar
                </Button>
                <Button startIcon={<BorderColorOutlined />} sx={estiloBoton}>Editar</Button>
              </ButtonGroup>
            </div>
          ))
        }
      </div>
    </>
  )   
}

export default Equipo