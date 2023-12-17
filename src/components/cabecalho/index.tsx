import Image from "next/image";
import styles from "./cabecalho.module.css";

export default function Cabecalho() {
  return (
    <>
        <header className={styles.cabecalho}>
        <Image src="/img/Logo.png" alt="Logo" className={styles.cabecalho_imagem}/>
        <div className={styles.cabecalho_infos}>
            <div className={styles.cabecalho_info}>
                <Image src="/img/Localização.svg" alt="Ícone de localização"/>
                <div>
                    <h4 className={styles.cabecalho_fonte_escritas}>Arco-Íris - Panambi, RS</h4>
                    <p className={styles.cabecalho_fonte_paragrafo}>Agende um horário por telefone</p>
                </div>
            </div>
            <div className={styles.cabecalho_info}> 
                <Image src="/img/Telefone.svg" alt="Ícone de telefone"/>
                <div>
                    <h4 className={styles.cabecalho_fonte_escritas}>(55) 9 9907-6319</h4>
                    <p className={styles.cabecalho_fonte_escritas}>(55) 9 9953-2549</p>
                </div>
            </div>
        </div>
    </header>
    </>
  );
};