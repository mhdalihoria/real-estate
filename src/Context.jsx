import { createContext, useState } from "react";

const Context = createContext();

// const initialState = {
//   location: "",
//   saleStatus: "default",
//   price: "default",
//   roomCount: "default",
//   bedCount: "default",
//   moveDate: "default",
//   more: "default",
// };
const initialState = {
  location: "New Baghdad, Iraq",
  type: "rent",
  price: "3.000",
  roomCount: "2",
  bedCount: "2"
};

//TODO: (if needed)
//* provide the initial mockDB info to Rent.jsx from here

//TODO:
//* Create a component for the Error in Rent.jsx

const ContextProvider = (props) => {
  const [data, setData] = useState({});

  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context as ContextObj, initialState };