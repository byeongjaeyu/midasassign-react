import "./App.css";
import IndexRoutes from "./IndexRoutes";
import Nav from "./Components/Nav";

import Container from "./Components/Container";


function App() {
  return (
    <div className="App">
      <Container>
        <Nav />
      </Container>
      <IndexRoutes />
    </div>
  );
}

export default App;
