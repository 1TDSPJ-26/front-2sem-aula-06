import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globas.css"


//importal os objetos de rota
import { createBrowserRouter, RouterProvider} from 'react-router'

//impotar os componentes de rotas:
import Home from './routes/home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

/Criando a objeto de rotas:
constroute = createBrowserRouter([
  {path "/", element: </app>, errorElementById('root')!}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


