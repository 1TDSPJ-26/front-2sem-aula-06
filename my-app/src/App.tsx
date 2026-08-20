import Conteudo from "./components/Conteudo/Conteudo";
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";

export default function App() {
  return(
    <div>

      <Cabecalho/>

      cria os componentes conteudo e rodape e importa eles automatricamente

      <Conteudo/>

      <Rodape/>

    </div>
  );
}