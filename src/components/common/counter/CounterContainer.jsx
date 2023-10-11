import { useState } from "react";

const CounterContainer = () => {
  const [contador, setcontador] = useState(0);
  const restar = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={() => setcontador(contador + 1)}>Sumar</button>
      <h2>{contador}</h2>
      <button>Restar</button>
    </div>
  );
};

export default CounterContainer;
