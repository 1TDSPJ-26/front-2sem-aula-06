import Breno from "./components/Nome/Breno"

 export default function App() {
  return (
    <div>
      <header>
        <h1>Meus Componentes</h1>
        <nav>
          <ul>
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
          </ul>
        </nav>
      </header>
      <main>
        <Breno/>
        <h2>Conteudo</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi nulla,
          assumenda optio provident sint, nesciunt deleniti alias animi saepe
          voluptatibus quia ipsam accusantium quos, tempore delectus fuga in?
          Adipisci expedita aperiam laborum ducimus aliquid saepe quam ullam
          repellat, voluptas reprehenderit quo reiciendis voluptatem voluptate
          totam, quos quibusdam. Consectetur, nihil laboriosam.
        </p>
        <footer>
          <p>Todos os direitos reservados. &copy;</p>
        </footer>
      </main>
    </div>
  );
}
