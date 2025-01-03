import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';
import { Button, MenuItem, TextField } from "@mui/material";

import styles from './Formulario.module.css'

const estiloInput = {
    flex: '1',

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(255, 255, 255, .2)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255, 255, 255, .3)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, .5)',
        },
        '& input': {
            color: 'rgba(255, 255, 255, 1)',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, .5)',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiFormHelperText-root': {
        fontSize: '10px',
    },
    '& textarea': {
        color: 'rgba(255, 255, 255, 1)',
    },
    '& select': {
        color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiSelect-select': {
        color: 'rgba(255, 255, 255, 1)',
    },
    '& .MuiSelect-icon': {
        color: 'rgba(255, 255, 255, 1)',
    },
}

function Formulario({ handleSubmit, equipos }) {
    const navigate = useNavigate();

    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [errors, setErrors] = useState({
        titulo: { error: false, message: '' },
        categoria: { error: false, message: 'El título debe tener al menos 3 caracteres' },
        imagen: { error: false, message: '' },
        video: { error: false, message: '' },
        descripcion: { error: false, message: '' },
    });

    const validarCampo = (campo, valor) => {
        switch (campo) {
            case 'titulo':
                if (valor.length < 3) {
                    return { error: true, message: 'El título debe tener al menos 3 caracteres' };
                }
                return { error: false, message: '' };
            case 'categoria':
                if (!valor) {
                    return { error: true, message: 'La categoría es obligatoria' };
                }
                return { error: false, message: '' };
            case 'imagen':
                if (!valor) {
                    return { error: true, message: 'El enlace de la imagen es obligatoria' };
                }
                return { error: false, message: '' };
            case 'video':
                if (!valor) {
                    return { error: true, message: 'El enlace del video es obligatorio' };
                }
                return { error: false, message: '' };
            case 'descripcion':
                if (valor.length < 10) {
                    return { error: true, message: 'La descripción debe tener al menos 10 caracteres' };
                }
                return { error: false, message: '' };
            default:
                return { error: false, message: '' };
        }
    };

    const manejarBlur = (e) => {
        const { id, value } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: validarCampo(id, value),
        }));
    };

    const limpiarFormulario = () => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
        setErrors({
            titulo: {
                titulo: false,
                message: 'El título es obligatorio',
            }
        })
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit({ id: uuidv4(), titulo, categoria, imagen, video, descripcion });
            navigate('/');
        }}>
            <div className={styles.categoria}>
                <TextField
                    id='titulo'
                    label='Título'
                    margin='normal'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    fullWidth
                    required
                    autoComplete="off"
                    error={errors.titulo.error}
                    helperText={errors.titulo.error && errors.titulo.message}
                    onBlur={manejarBlur}
                    sx={estiloInput}
                />
                <TextField
                    id='categoria'
                    label='Categoria'
                    margin='normal'
                    select
                    required
                    autoComplete="off"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    fullWidth
                    error={errors.categoria.error}
                    helperText={errors.categoria.error && errors.categoria.message}
                    onBlur={manejarBlur}
                    sx={estiloInput}
                >
                    {equipos.map((categoria) => (
                        <MenuItem key={categoria.id} value={categoria.nombre} sx={estiloInput}>
                            {categoria.nombre}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div className={styles.categoria}>
                <TextField
                    id='imagen'
                    label='Imagen'
                    margin='normal'
                    autoComplete="off"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    fullWidth
                    required
                    error={errors.imagen.error}
                    helperText={errors.imagen.error && errors.imagen.message}
                    onBlur={manejarBlur}
                    sx={estiloInput}
                />
                <TextField
                    id='video'
                    label='Video'
                    margin='normal'
                    autoComplete="off"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                    fullWidth
                    required
                    error={errors.video.error}
                    helperText={errors.video.error && errors.video.message}
                    onBlur={manejarBlur}
                    sx={estiloInput}
                />
            </div>
            <div className={styles.categoria}>
                <TextField
                    id='descripcion'
                    label='Descripcion'
                    margin='normal'
                    autoComplete="off"
                    multiline
                    required
                    rows={5}
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    fullWidth
                    error={errors.descripcion.error}
                    helperText={errors.descripcion.error && errors.descripcion.message}
                    onBlur={manejarBlur}
                    sx={estiloInput}
                />
            </div>
            <div className={styles.botones}>
                <Button
                    variant="outlined"
                    size="large"
                    type='submit'
                    sx={{
                        width: '180px',
                        fontFamily: 'var(--fuente-source)',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        lineHeight: '38px',
                        color: 'white',
                    }}
                >
                    Guardar
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    type='reset'
                    onClick={limpiarFormulario}
                    sx={{
                        width: '180px',
                        fontFamily: 'var(--fuente-source)',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        lineHeight: '38px',
                        color: 'white',
                        borderColor: 'white',
                    }}
                >
                    Limpiar
                </Button>
            </div>
        </form>
    )
}

export default Formulario