import { createContext, useState } from "react";
import { generateRandomCoords } from "./utils/randomCoords";

const Context = createContext();

//initial state for the search state in "Rent"
const initialState = {
  location: "New Baghdad, Iraq",
  type: "rent",
  price: "3.000",
  roomCount: 2,
  bedCount: 2,
};

//save the random coordinates in a variables to be sent to another component
const randomCoordinates = generateRandomCoords();


const ContextProvider = (props) => {
  const [data, setData] = useState({});
  return (
    <Context.Provider value={{ data, setData, randomCoordinates }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context as ContextObj, initialState };
