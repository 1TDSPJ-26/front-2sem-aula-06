import Cabecalho from "./components/Cabecalho/cabecalho.tsx";
import Conteudo from "./components/Conteudo/conteudo.tsx";
import Rodape from "./components/Rodape/rodape.tsx";

export default function App(){

  return(
    <div>
      
      <Cabecalho/>

    {/* Para a próxima aula crie os componentes Conteudo e Rodape e importem 
      automáticamente nos lugares dos JSX aqui em App. */}

     <Conteudo/>

      <Rodape/>
      
    </div>
  );
}