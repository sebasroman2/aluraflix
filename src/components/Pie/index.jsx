import styles from './Pie.module.css'

import logo from "./logo.png"

function Pie() {
    return (
        <footer className={styles.pie}>
            <img src={logo} alt="Logo de AluraFlix" />
        </footer>
    )
}

export default Pie