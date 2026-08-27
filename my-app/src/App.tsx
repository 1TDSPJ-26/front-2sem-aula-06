import { Outlet } from "react-router/internal/react-server-client"
import Cabecalho from "./components/cabecalho/Cabecalho"

export default function App() {
  return(
    <div>
      <Cabecalho/>
      <Outlet/>
      <main>
        <h2>Conteúdo</h2>
      </main>

      <footer>
        <p>&copy;2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}