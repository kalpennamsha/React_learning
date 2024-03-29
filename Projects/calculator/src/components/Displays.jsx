import styles from "./Displays.module.css";
const Displays = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Displays;
