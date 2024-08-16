import React, { useState } from "react";
import Header from "./component/Header";
import Counter from "./component/Counter";
import Content from "./component/Content";
import Footer from "./component/Footer";
import Status from "./component/Status";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header title="Counter App" />
      <Content />

      <Counter count={count} increment={increment} />
      <Status count={count} />

      <Footer year={2024} />
    </div>
  );
}

export default App;
