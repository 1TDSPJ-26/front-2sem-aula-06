
//Aprender a construir um componente funcional


export default function App() {
  //Área reservada para declarações

  const nome = "Alê";

  return(
    <div>
      {/* O HTML aqui é na verdade XML! */}
      <h1>Meu componenente</h1>
      <h2>Autor: {nome}</h2>
    </div>
  );
}