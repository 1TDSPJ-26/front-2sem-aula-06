import { Outlet } from "react-router";

import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
  return (
    <div>
      <Cabecalho />

      <Outlet />

      <footer>
        <p>&copy; 2026 - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
