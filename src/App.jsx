import { useState } from "react";
import Header from "./components/Header";
import { Container } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Container>
      <Header />
    

    </Container>
    </>
  );
}

export default App;
