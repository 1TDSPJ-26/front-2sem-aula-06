import Cabecalho from "./Cabecalho/Cabecalho"

export default function App() {
   
    return(
    <div>
       
       <Cabecalho/>


    {/*Para a próxima aula  crie  os componentes Conteudo e Rodape e importem automaticamente nos lugares dos JSX aqui em App.tsx..*/}
        <main>
            <h2>Conteúdo</h2>
        </main>
        <footer>
            <p>&copy; 2023 Meu boiler plate. Todos os direitos reservados.</p>
        </footer>
    </div>

    );
}