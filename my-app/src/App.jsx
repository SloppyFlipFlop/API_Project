
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SinglePokemon from "./Pages/SinglePokemon";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/pokemon/:name">
          <SinglePokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
