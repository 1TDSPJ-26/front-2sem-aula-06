import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./global.css";

import {createBrowserRouter,RouterProvider } from "react-router";
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import Error from './routes/Error/index.tsx';

const router = createBrowserRouter([{
  {path : "/", element: <App />, ErrorElement: <Error />, children: []},
  {path : "/", element: <Home />},
    {path: "/produtos", element: <Produtos />},
    {path: "/editar-produtos/:id", element: <EditarProdutos />}


}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


