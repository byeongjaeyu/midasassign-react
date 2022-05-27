import "./App.css";
import IndexRoutes from "./IndexRoutes";
import Nav from "./Components/Nav";

import Container from "./Components/Container";

function App() {
  return (
    <Container>
      <Nav />
      <IndexRoutes />
    </Container>
  );
}

export default App;
