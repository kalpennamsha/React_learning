import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  let foodItems = ["milk", "salad", "roti", "paneer", "bhajipav", "pizza"];

  return (
    <>
      <Container>
        <h1 className="foodheading">Healthy food</h1>
        <ErrorMessage items={foodItems}> </ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the healthy foods that good for your health.</p>
      </Container> */}
    </>
  );
}

export default App;
