import {createContext, useState} from 'react'

const Context = createContext()

//TODO: this will be needed later
// const initialState ={
//   count: 5, 
//   categoryId: "9"
// }

//TODO: (if needed)
//* provide the initial mockDB info to Rent.jsx from here

//TODO: 
//* Create a component for the Error in Rent.jsx

const ContextProvider = (props) => {
  return (
    <Context.Provider value='something'>
      {props.children}  
    </Context.Provider>
  )
}

export {ContextProvider, Context as ContextObj}