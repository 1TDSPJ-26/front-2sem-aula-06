import Henrique from "./components/Nome/Henrique"

export default function App (){
  return(
    <div>
      <header>
        <h1> Meus componentes</h1>
        <nav>
          <ul>
            <li>Item-1</li>
            <li>Item-2</li>
            <li>Item-3</li>
          </ul>
        </nav>
      </header>
      <main>
        <Henrique/>
        <h2>Conteudo</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus non sequi libero nostrum, molestiae impedit possimus. Hic iste soluta autem doloribus voluptatum perspiciatis quam veritatis animi nemo magnam totam molestias assumenda, deserunt eos ab aliquid aperiam repellat perferendis similique, fugit delectus. Ipsam voluptatem velit provident omnis harum eaque dolor.
        </p>
      </main>
      <footer>
        <p>Todos os direitos reservados</p>
      </footer>
    </div>
  );
}