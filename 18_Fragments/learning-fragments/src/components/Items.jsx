import styles from "./Items.module.css";
const Items = ({ foodItem, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} bought`);
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
