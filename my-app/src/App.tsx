//Aprender a construir um componente funcional



export default function app{
  //Area reservada para declarações

  const nome = "Renato";

  return(
    <div>
     {/* O HTML aqui é na verdade*/}
      <h1>Meu componente</h1>
      <h2>Autor: {nome}</h2>
    </div>

  );

 
}