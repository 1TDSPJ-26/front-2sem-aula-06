//Aprendendo a construir um componente funcional



export default function App() {
  //Área reservada para declarações

  const nome = "Beatriz";

  return (
    <div>
      {/*O HTML aqui é na verdade XML! */}
      <h1>Meu Componente</h1>
      <h2>Autor: {nome}</h2>
    </div>
  );
}