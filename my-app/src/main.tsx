import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globals.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
//importando objetos de rotas
import {createBrowserRouter, RouterProvider} from 'react-router';

//importar componentes de rotas
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

//criando a objeto de rotas
const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <Error />, children: [
    {path: '/', element: <Home />},
    {path: '/produtos', element: <Produtos />},
    {path: '/editar-produtos', element: <EditarProdutos />}
  ]},
]);

