import styles from "./home.module.css"

export default function Home () {
    return (
        <>
            <main className={styles.inicial}>
                <div className={styles.inicial_escritas}>
                    <h2 id={styles.inicial_subtitulo}>ESCRITÓRIO DE ENGENHARIA</h2>
                    <h1 id={styles.inicial_titulo}>ESPECIALIZADO EM REGULARIZAÇÕES</h1>
                </div>
                <div className={styles.inicial_botao}>
                    <a href="https://api.whatsapp.com/send?phone=5555999076319&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento" id={styles.botao_contato}>ENTRE EM CONTATO</a>
                </div>
                <div className={styles.inicial_imagem}></div>
                <nav className={styles.inicial_menu}>
                    <ul className={styles.inicial_lista}>
                        <li className={styles.inicial_itens}>
                            <a href="#" className={styles.inicial_itens_escritas} id={styles.inicial_inicio}>Início</a>
                        </li>
                        <li className={styles.inicial_itens}>
                            <a href="#" className={styles.inicial_itens_escritas} id={styles.inicial_areas}>Áreas de Atuação</a>
                        </li>
                        <li className={styles.inicial_itens}>
                            <a href="#" className={styles.inicial_itens_escritas} id={styles.inicial_blog}>Obras</a>
                        </li>
                        <li className={styles.inicial_itens}>
                            <a href="#" className={styles.inicial_itens_escritas} id={styles.inicial_contato}>Contato</a>
                        </li>
                    </ul>
                </nav>
            </main>
        </>
    )
}