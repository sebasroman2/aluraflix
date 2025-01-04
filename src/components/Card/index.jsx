import { Button, ButtonGroup, useMediaQuery } from '@mui/material';
import { BorderColorOutlined, DeleteForeverOutlined } from '@mui/icons-material';

import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card(props) {
    const { color, eliminarVideo, abrirModal, ...video } = props;

    const isSmallScreen = useMediaQuery('(max-width: 712px)');

    const estiloBoton = {
        width: '50%',
        backgroundColor: 'var(--fondo-negro)',
        fontSize: '16px',
        borderRadius: '0 0 15px 15px'
    }

    const estiloGrupoBotones = {
        width: isSmallScreen ? '280px' : '432px',
        borderRadius: '0 0 15px 15px',
        border: `5px solid ${color}`,
        borderTop: 'none',
        '& .MuiButtonGroup-grouped:not(:last-of-type)': {
            borderColor: 'var(--fondo-negro)',
        },
    }

    return (
        <div className={styles.container}>
            <Link to={`${video.id}`}
                className={styles.video}
                style={
                    {
                        borderColor: `${color}`,
                        boxShadow: `inset 0px 0px 10px 5px ${color}bf`
                    }
                }
            >
                <img src={video.imagen} alt={video.titulo} />
            </Link>
            <ButtonGroup
                variant="contained"
                aria-label="Basic button group"
                sx={estiloGrupoBotones}
            >
                <Button
                    startIcon={<DeleteForeverOutlined />}
                    sx={estiloBoton}
                    onClick={() => eliminarVideo(video.id)}
                >
                    Borrar
                </Button>
                <Button
                    startIcon={<BorderColorOutlined />}
                    sx={estiloBoton}
                    onClick={() => abrirModal(video)}
                >
                    Editar
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Card