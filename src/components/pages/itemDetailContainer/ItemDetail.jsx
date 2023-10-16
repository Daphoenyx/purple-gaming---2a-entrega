import CounterContainer from "../../common/counter/CounterContainer";

export const ItemDetail = ({ productSelected, onAdd }) => {
  return (
    <div>
      <h3>{productSelected.title}</h3>
      <img src={productSelected.image} alt="" />
      <h5>{productSelected.description}</h5>
      <h4>EUR {productSelected.price}</h4>
      <CounterContainer stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};
