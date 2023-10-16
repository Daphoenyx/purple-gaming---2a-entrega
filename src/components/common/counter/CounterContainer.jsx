const CounterContainer = ({ stock, onAdd }) => {
  const [contador, setcontador] = useState(1);

  const sumar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    } else {
      alert("Cantidad maxima.");
    }
  };
  const restar = () => {
    if (contador > 1) {
      setcontador(contador - 1);
    }
  };

  return (
    <CounterPresentacional
      sumar={sumar}
      restar={restar}
      contador={contador}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
