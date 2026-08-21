import Cabecalho from "./components/Cabecalho/Cabecalho";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App() {

  return (
    <div>

      <Cabecalho />
      {/* Para a próxima aula crie os componentes Conteudo e Rodape e importem 

      automáticamente nos lugares dos JSX aqui em App. */}
      
      <Conteudo />

      <Rodape />

    </div>
  );
}