import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from "axios";
const Pokemons = [
  {
    name: "Bulbasaur",
    number: "001",
    color: "#c4e5d4",
  },
  {
    name: "Ivysaur",
    number: "002",
    color: "#bedcde",
  },
  {
    name: "Venusaur",
    number: "002",
    color: "#bed8d7",
  }
];


function App() {
  const [pokeList, setPokeList] = useState<Array<any>>([]);

  const getPokemons = async () => {
    const data = await axios.get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit: 10, offset: 0
      }
    }).then((data) => data?.data).catch(() => []);
    setPokeList(data.results ?? []);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <div className="App">
      <Header/>
      <Search/>
      <section id="pokemon-list">
        {
          pokeList?.map((item, number) => <PokeCard name={item.name} id={number} />)
        }
      </section>
    </div>
  );
}

export default App;

function Search() {
  return <section id="filter">
    <input type="search" placeholder="Name or number" />
    <button>Search</button>
  </section>;
}

function Header() {
  return <section id="header">
    <h1>Pokedex</h1>
    <p>Search for a Pokemon by name or using it's National Pokedex Number</p>
  </section>;
}

function PokeCard({ name, id }: { name: string, id: number; }): JSX.Element {
  return <>
    <div className="pokecard" style={{ backgroundColor: "#cacaca" }}>
      <span id="name"> {name}</span>
      <span id="number">{id + 1}</span>
    </div>
  </>;
}

