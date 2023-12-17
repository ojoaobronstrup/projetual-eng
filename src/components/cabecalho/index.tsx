import styles from "./cabecalho.module.css";
import styled from "styled-components";

const CabecalhoEstilizado = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
`
const CabecalhoImagem = styled.img`
    padding: 0.2em;
    @media (max-width: 820px) {
        padding: 0;
    };
`
const CabecalhoInfos = styled.div`
    display: flex;
    gap: 5em;
    @media (max-width: 820px) {
        display: none;
    }
`
export default function Cabecalho() {
  return (
    <>
        <CabecalhoEstilizado>
        <CabecalhoImagem src="/img/Logo.png" alt="Logo"/>
        <CabecalhoInfos>
            <div className={styles.cabecalho_info}>
                <img src="/img/Localização.svg" alt="Ícone de localização"/>
                <div>
                    <h4 className={styles.cabecalho_fonte_escritas}>Arco-Íris - Panambi, RS</h4>
                    <p className={styles.cabecalho_fonte_paragrafo}>Agende um horário por telefone</p>
                </div>
            </div>
            <div className={styles.cabecalho_info}> 
                <img src="/img/Telefone.svg" alt="Ícone de telefone"/>
                <div>
                    <h4 className={styles.cabecalho_fonte_escritas}>(55) 9 9907-6319</h4>
                    <p className={styles.cabecalho_fonte_escritas}>(55) 9 9953-2549</p>
                </div>
            </div>
        </CabecalhoInfos>
    </CabecalhoEstilizado>
    </>
  );
};