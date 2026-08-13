
//Aprender a construir um componente funcional


export default function App() {
//Area resercada para declaracoes

const nome = "Ale";

  return(
    <div>
      {/*O HTML aqui é na verdade XML! */}
      <h1>Meu componente</h1>
      <h2>Autor: {nome}</h2>
    </div>

  );
}