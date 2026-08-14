import Ale from "./components/Nome/Ale"

export default function App(){

  return(
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
          <Ale/>
          <h2>Conteúdo</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat pariatur corrupti at neque voluptatum saepe nostrum, excepturi adipisci dolores sapiente magni, ipsam quis! A tempore, voluptate perspiciatis itaque nulla nesciunt.</p>
        </main>
        <footer>
          <p>Todos os direitos reservados. &copy;</p>
        </footer>
    </div>
  );
}