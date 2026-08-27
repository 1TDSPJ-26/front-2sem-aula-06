import Cabecalho from "./components/cabecalho/cabecalho";

export default function App() {

  return (
    <div>
      
      <Cabecalho/>

      <Outlet/>

      <footer>
        <p>Todos os direitos reservados</p>
      </footer>

    </div>
  );
}