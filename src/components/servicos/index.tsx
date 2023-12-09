import styles from "./servicos.module.css"

export default function Servicos () {
    return (
        <>
            <section className={styles.servicos}>
                <h2 className={styles.servicos_titulo}>SERVIÇOS PRESTADOS</h2>
                <ul className={styles.servicos_lista}>
                    <li className={`${styles.servicos_regularizacoes} ${styles.servicos_formatacao}`}>
                        <img src="/img/Regularizações.svg" alt="Ícone de documento" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>REGULARIZAÇÕES</p>
                    </li>
                    <li className={`${styles.servicos_ampliacoes} ${styles.servicos_formatacao}`}>
                        <img src="/img/Casa.svg" alt="Ícone de uma casa" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>AMPLIAÇÕES E REFORMAS</p>
                    </li>
                    <li className={`${styles.servicos_desmembramento} ${styles.servicos_formatacao}`}>
                        <img src="/img/Cidade.svg" alt="Ícone de um apartamento" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>DESMEMBRAMENTO E UNIFICAÇÃO DE LOTES</p>
                    </li>
                    <li className={`${styles.servicos_laudos} ${styles.servicos_formatacao}`}>
                        <img src="/img/Laudos.svg" alt="Ícone de laudos" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>PROJETOS ARQUITETÔNICOS</p>
                    </li>
                    <li className={`${styles.servicos_ppci} ${styles.servicos_formatacao}`}>
                        <img src="/img/PPCI.svg" alt="Ícone anti-chamas" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>PPCI</p>
                    </li>
                    <li className={`${styles.servicos_projetos} ${styles.servicos_formatacao}`}>
                        <img src="/img/Projetos.svg" alt="Ícone do projeto de uma casa" className={styles.servicos_icones}/>
                        <p className={styles.servicos_servicos}>PROJETOS ELÉTRICOS, ESTRUTURAIS E HIDROSSANITÁRIOS</p>
                    </li>
                </ul>
            </section>
        </>
    )
}