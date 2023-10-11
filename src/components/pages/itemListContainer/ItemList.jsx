import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ juegos }) => {
  return (
    <section style={{ display: "flex", justifyContent: "space-evenly" }}>
      {juegos.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default ItemList;
