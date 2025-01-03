import styles from './NotFound.module.css'

function NotFound() {
    return (
        <section className={styles.container}>
            <img src="/img/404.gif" alt="Error 404" className={styles.error} />
        </section>
    )
}

export default NotFound