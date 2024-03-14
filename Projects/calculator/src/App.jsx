import styles from "./App.module.css";
import ButtonsConatiner from "./components/ButtonsContainer";
import Displays from "./components/Displays";
function App() {
  return (
    <div className={styles.calculator}>
      <Displays></Displays>
      <ButtonsConatiner></ButtonsConatiner>
    </div>
  );
}

export default App;
