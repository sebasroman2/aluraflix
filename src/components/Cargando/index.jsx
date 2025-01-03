import styles from './Cargando.module.css'

function Cargando() {
    return (
        <section className={styles.container}>
            <img src="/img/cargando.gif" alt="Cargando" className={styles.cargando} />
        </section>
    )
}

export default Cargando