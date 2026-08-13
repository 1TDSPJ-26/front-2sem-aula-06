//Aprendendo a construir um componente funcional no React com TypeScript

export default function App() {
  //Área reservada para declarações de variáveis, funções e hooks

  const nome = "Matheus";

  return(
    <div>
      {/*O HTML aqui na verdade é XML!!!!*/}
      <h1>Meu componente</h1>
      <h2>Autor: {nome}</h2>
    </div>
  );
}