import styles from './Banner.module.css'

function Banner({children}) {
    return (
        <div className={styles.capa}>
            <div className={styles.gradiente}></div>
            <div className={styles.contenedor}>
                {children}
            </div>
        </div>
    )
}

export default Banner