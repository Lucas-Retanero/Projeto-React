import styles from './Pessoa.module.css'

function Pessoa({ nome, idade, profissao, foto }) {
    return (
        <div className={styles.pessoaContainer}>
            <img id={styles.foto} src={foto} alt={nome} title={nome}></img>
            <div className={styles.pessoaInfo}>
                <p><b>Nome:</b> {nome}</p>
                <p><b>Idade:</b> {idade}</p>
                <p><b>Profissão:</b> {profissao}</p>
            </div>
        </div>
    );
}

export default Pessoa