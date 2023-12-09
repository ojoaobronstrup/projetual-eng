import Cabecalho from "@/components/cabecalho";
import Home from "@/components/home";
import Projetos from "@/components/projetos";
import Servicos from "@/components/servicos"

export default function Inicio () {
    return (
        <>
            <Cabecalho/>
            <Home/>
            <Servicos/>
            <Projetos/>
        </>
    );
};