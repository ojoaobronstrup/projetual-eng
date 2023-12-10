import Cabecalho from "@/components/cabecalho";
import Final from "@/components/final";
import Home from "@/components/home";
import Projetos from "@/components/projetos";
import Rodape from "@/components/rodape";
import Servicos from "@/components/servicos"

export default function Inicio () {
    return (
        <>
            <Cabecalho/>
            <Home/>
            <Servicos/>
            <Projetos/>
            <Final/>
            <Rodape/>
        </>
    );
};