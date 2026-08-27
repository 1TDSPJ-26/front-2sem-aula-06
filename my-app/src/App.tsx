import Conteudo from "./components/Conteudo/Conteudo";
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Rodape from "./components/Rodape/Rodape";
import { Outlet } from "react-router";

export default function App() {
  return(
    <div>

      <Cabecalho/>

      <Conteudo/>
      <Outlet/>

      <Rodape/>

    </div>
  );
}