import styled from "styled-components";

const FinalEstilizado = styled.section`
    height: 70vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width:820px) {
        height: 50vh;
    }
`
const FinalContato = styled.h2`
    color: var(--azul);
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 24px;
`
const FinalTel = styled.a`
    text-decoration: none;
    color: var(--branco);
    background-color: var(--azul);
    border-radius: 18px;
    padding: 10px;
    cursor: pointer;
`
const FinalFundo = styled.img`
    z-index: 0;
    height: 70vh;
    width: 100vw;
    position: absolute;
    background-size: cover;
    opacity: 0.1;
    @media (max-width: 820px) {
        height: 50vh;
    }
`
const FinalConteudo = styled.div`
    z-index: 2;
    display: flex;
    align-items: center;
`

export default function Final () {
    return (
        <>
            <FinalEstilizado>
                <FinalFundo src="/img/Fundo.png" alt="Fundo"/>
                <FinalConteudo>
                    <img src="/img/D&M.png" alt="Casal proprietário"/>
                    <div>
                        <FinalContato>Entre em contato</FinalContato>
                        <FinalTel onClick={() => {
                            window.open("https://api.whatsapp.com/send?phone=5555999076319&text=Ol%C3%A1,%20tudo%20bem?%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento");
                        }}>(55) 9 9907-6319</FinalTel>
                    </div>
                </FinalConteudo>
            </FinalEstilizado>
        </>
    )
}