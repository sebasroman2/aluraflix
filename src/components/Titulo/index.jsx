import styles from './Titulo.module.css'

function Titulo() {
    return (
        <>
            <div className={styles.texto}>
                <h2>Front End</h2>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <div className={styles.imagen}>
                <img src="/img/player.png" alt="Imagen" />
            </div>
        </>
    )
}

export default Titulo