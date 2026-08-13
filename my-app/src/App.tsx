// aprender a ccontruir com um componente funcional

export default function App(){
  // area reservada paara declarações

  const nome = "breno";

  return(
    <div>
      {/*O HTML AQUI É NA VERDADE XML*/}
      <h1>Meu componente</h1>
      <h2>Autor: {nome}</h2>
    </div>
  );
}