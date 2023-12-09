import styles from "./projetos.module.css";

export default function () {
    return (
        <>
            <section className={styles.projetos}>
                <div className={`${styles.projetos_img} ${styles.img1}`}></div>
                <div className={`${styles.projetos_img} ${styles.img2}`}></div>
                <div className={`${styles.projetos_img} ${styles.img3}`}></div>
                <div className={`${styles.projetos_img} ${styles.img4}`}></div>
                <div className={`${styles.projetos_img} ${styles.img5}`}></div>
                <div className={`${styles.projetos_img} ${styles.img6}`}></div>
                <div className={`${styles.projetos_img} ${styles.img7}`}></div>
                <div className={`${styles.projetos_img} ${styles.img8}`}></div>
            </section>
        </>
    )
}