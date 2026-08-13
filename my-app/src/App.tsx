//Aprender a construir um componente funcional



export default function App() {
    // Area reservada para declaraçoes

    const nome = "Alex";

    return (
        <div>
            `{/* O HTML aqui é na verda XML! */}`
            <h1>Meu componente</h1>
            <h2>Autor: {nome}</h2>
        </div>
    );
}

