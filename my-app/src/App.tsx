import MatheusFerreira from "./components/Nome/MatheusFerreira"

export default function App(){
  return(
    <div>
      <header>
        <h1>Meus Componentes</h1>
        <nav>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </nav>
      </header>
      <main>
        <MatheusFerreira/>
        <h2>Conteúdo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor itaque id beatae facere obcaecati cumque quos dignissimos voluptatem ad harum doloribus quasi placeat doloremque accusantium exercitationem odio sint eaque optio est, culpa officiis sunt tempora. Quod quaerat veritatis ullam ducimus.</p>
      </main>
      <footer>
        <p>Todos os direitos reservados. &copy; </p>
      </footer>
    </div>
  )
}