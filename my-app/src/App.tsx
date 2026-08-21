import Cabecalho from "./components/cabecalho/Cabecalho";
import Conteudo from "./components/conteudo/conteudo";

export default function App(){

  return(
    <div>
      
      <Cabecalho/>

    {/* Para a próxima aula crie os componentes Conteudo e Rodape e importem 
      automáticamente nos lugares dos JSX aqui em App. */}

      <Conteudo/>

      <footer>
          <p>&copy;2026 - Todos os direitos reservados</p>
      </footer>
      
    </div>
  );
}

