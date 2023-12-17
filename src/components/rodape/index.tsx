import Image from "next/image";
import styles from "./rodape.module.css";

export default function Rodape () {
    return (
        <>
            <footer className={styles.rodape}>
                <div className={styles.rodape1}>
                    <Image src="/img/Logo.png" alt="Logo do escritório Projetual" className={styles.rodape1_logo}/>
                </div>
                <div className={styles.rodape2}>
                    <nav className={styles.rodape_conj}>
                        <a href="#" className={styles.rodape_links}>Nossa Missão</a>
                        <a href="#" className={styles.rodape_links}>Fundadores</a>
                        <a href="#" className={styles.rodape_links}>Vencedores</a>
                    </nav>
                    <nav className={styles.rodape_conj}>
                        <a href="#" className={styles.rodape_links}>Informações Legais</a>
                        <a href="#" className={styles.rodape_links}>Política de Cookies</a>
                        <a href="#" className={styles.rodape_links}>Política de Privacidade</a>
                    </nav>
                    <nav className={styles.rodape_conj}>
                        <a href="#" className={styles.rodape_links}>Contato</a>
                        <a href="#" className={styles.rodape_links}>FAQ</a>
                        <a href="#" className={styles.rodape_links}>Suporte</a>
                    </nav>
                </div>
                <div className={styles.rodape3}>Daniel Luiz Germano de Oliveira & Mirian Aline Graff de Oliveira</div>
            </footer>
        </>
    )
}