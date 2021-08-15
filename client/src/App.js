import { Router } from "@reach/router";
import "./App.css";
import All from "./components/All";
import Create from "./components/Create";
import Details from "./components/Details";
import Update from "./components/Update";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <All default path="/products" />
        <Create path="/products/new" />
        <Details path="/products/:id" />
        <Update path="/products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
