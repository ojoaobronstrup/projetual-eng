import styles from "./modalImg.module.css";

export default function ModalImagem (props:any) {
    return (
        <>
            <section className={styles.corpo}>
                <div className={styles.corpo_modal}>
                    <img src="/img/close.svg" className={styles.fecha} onClick={() => {
                        return window.location.pathname = "/";
                    }}/>
                    <div className={styles.modal_escritas}>
                        <h2><strong className={styles.modal_texto}>Obra:</strong> {props.obra}</h2>
                        <h2><strong className={styles.modal_texto}>Ano:</strong> {props.ano}</h2>
                        <h2><strong className={styles.modal_texto}>Local:</strong> {props.local}</h2>
                        <h2><strong className={styles.modal_texto}>Área Total:</strong> {props.area}</h2>
                        <h2><strong className={styles.modal_texto}>Projetos Desenvolvidos:</strong> {props.projetos}</h2>
                    </div>
                    <img src={props.imagem} className={styles.modal_predio1}/>
                </div>
            </section>
        </>
    )
}