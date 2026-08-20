import Cabecalho from "./components/Cabecalho/cabecalho";

export default function App(){

  return(
    <div>
      
      <Cabecalho/>

    {/* Para a próxima aula crie os componentes Conteudo e Rodape e importem 
      automáticamente nos lugares dos JSX aqui em App. */}

      <main>
          <h2>Conteúdo</h2>
      </main>

      <footer>
          <p>&copy;2026 - Todos os direitos reservados</p>
      </footer>
      
    </div>
  );
}

