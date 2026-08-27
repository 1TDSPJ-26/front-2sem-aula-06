import { Outlet } from "react-router";
import Cabecalho from "./components/cabecalho/Cabecalho";
import Conteudo from "./components/conteudo/conteudo";
import Rodape from "./components/rodape/rodape";

export default function App(){

  return(
    <div>
      
      <Cabecalho/>

      <Outlet/>

      <Rodape/>
      
    </div>
  );
}

