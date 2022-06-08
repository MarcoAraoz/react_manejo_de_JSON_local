import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import users from "./json/users.json";

const arrayColors = [
  "#3F86CA",
  "#3E4756",
  "#A2ACBD",
  "#C36484",
  "#8B3053",
  "#DEA01E",
  "#3D7570",
  "#4F1E00",
  "#A36854",
  "#008A5F",
];

function App() {
  const createNumberRandom = (data) => {
    return Math.floor(Math.random() * users.length);
  };

  const getElementRandom = (arr) => {
    const i = createNumberRandom(arr);
    return arr[i];
  };

  const [userRandom, setuserRandom] = useState(getElementRandom(users));
  const [colorRandom, setcolorRandom] = useState(getElementRandom(arrayColors));

  const clickButton = () => {
    setuserRandom(getElementRandom(users));
    setcolorRandom(getElementRandom(arrayColors));
  };

  const appStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={appStyle}>
      <Card
        userRandom={userRandom}
        colorRandom={colorRandom}
        clickButton={clickButton}
      />
    </div>
  );
}

export default App;
