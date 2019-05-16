import React, {  Component }  from 'react';
import PokemonList from './components/PokemonList';
import PokemonCard from './components/PokemonCard';
class App extends Component {
  render() {
    return(
      <div className="App">
      <PokemonList />
      <PokemonCard />
      </div>
    );
  }
}

export default App;
