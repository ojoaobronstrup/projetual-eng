import styles from "./projetos.module.css";
import Link from "next/link";

export default function () {
    return (
        <>
            <section className={styles.projetos}>
                <Link href="/projeto1" className={`${styles.projetos_img} ${styles.img1}`}></Link>
                <Link href="/projeto2" className={`${styles.projetos_img} ${styles.img2}`}></Link>
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