import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          handleBuyButton={() => {
            console.log(`${item} bought`);
          }}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
