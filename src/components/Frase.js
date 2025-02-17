import styles from './Frase.module.css'
function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p id={styles.frase}>Esse é um componente com uma frase e estilizado com CSS</p>
        </div>
    )
}

export default Frase