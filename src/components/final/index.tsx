import styles from "./final.module.css";

export default function Final () {
    return (
        <>
            <section className={styles.final}>
                <img src="/img/Fundo.png" alt="Fundo" className={styles.final_fundo}/>
                <div className={styles.final_conteudo}>
                    <image>
                        <img src="/img/D&M.png" alt="Casal proprietário" className={styles.final_img}/>
                    </image>
                    <div className={styles.final_texto}>
                        <h2 className={styles.final_contato}>Entre em contato</h2>
                        <a href="https://api.whatsapp.com/send?phone=5555999076319&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento" className={styles.final_tel}>(55) 9 9907-6319</a>
                    </div>
                </div>
            </section>
        </>
    )
}