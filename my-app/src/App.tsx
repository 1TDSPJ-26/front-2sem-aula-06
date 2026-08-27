import { Outlet } from "react-router"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
    <div>
      <Cabecalho />
      <Outlet />
      <Footer /> 
    </div>
  )
}
