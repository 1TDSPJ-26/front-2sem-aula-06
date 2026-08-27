import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./globals.css";

//Importar os objetos de rotas:
import { createBrowserRouter,RouterProvider } from 'react-router';

//Importar os componentes de rotas:
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

//Criando a objeto de rotas:
const route = createBrowserRouter([
  {path: "/" , element: <App/>, errorElement: <Error/>, children:[
    {path: "/", element: <Home/>},
    {path: "/produtos", element: <Produtos/>},
    {path: "/editar-produtos/:id", element: <EditarProdutos/>},
  ]
}]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)

