import "./App.css";
const { useState, useEffect, useRef } = require("react");

const cardapio = [
  {
    nome: "Moqueca",
    preco: 7325,
    quantidade: 0,
  },
  {
    nome: "Dobradinha",
    preco: 2500,
    quantidade: 0,
  },
  {
    nome: "Feijoada",
    preco: 2000,
    quantidade: 0,
  },
];

function Item({ nome, preco, quantidade, stateCardapio, setStateCardapio }) {
  function mudarQuantidade(e) {
    e.preventDefault();

    const indice = stateCardapio.findIndex((item) => item.nome === nome);

    stateCardapio[indice].quantidade = e.target.valueAsNumber;
    setStateCardapio([...stateCardapio]);
  }

  return (
    <li>
      <h2>{nome}</h2>
      <div>
        <input
          type="number"
          min={0}
          value={quantidade}
          onChange={(e) => mudarQuantidade(e)}
        ></input>{" "}
        X R$
        {preco / 100} = R${(quantidade * preco) / 100}
      </div>
    </li>
  );
}

function App() {
  const [stateCardapio, setStateCardapio] = useState(cardapio);

  stateCardapio.sort((a, b) => b.quantidade - a.quantidade);

  return (
    <div className="app">
      <h1>Cardápio</h1>
      <ul>
        {stateCardapio.map((item) => {
          return (
            <Item
              nome={item.nome}
              preco={item.preco}
              key={item.nome}
              quantidade={item.quantidade}
              stateCardapio={stateCardapio}
              setStateCardapio={setStateCardapio}
            ></Item>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
