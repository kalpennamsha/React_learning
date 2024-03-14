import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  let foodItems = ["milk", "salad", "roti", "paneer", "bhajipav", "pizza"];

  let textStateArr = useState("food items entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];
  console.log(`current value of textstate: ${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="foodheading">Healthy food</h1>
        <ErrorMessage items={foodItems}> </ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>Above is the healthy foods that good for your health.</p>
      </Container> */}
    </>
  );
}

export default App;
