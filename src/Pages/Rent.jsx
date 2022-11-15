import { useState, useContext } from "react";
import Map from "../Components/Map";
import PropertyItem from "../Components/PropertyItem";
import { ContextObj, initialState } from "../Context";
import { cardDetails } from "../utils/mockDB";

const Rent = () => {
  const { data } = useContext(ContextObj); //receives data from context
  const dataObjToArr = Object.keys(data); //Transforming the Object to an array for later use

  const [search, setSearch] = useState(() => {
    //the state that holds the search query that will be used to filter the data from MockDB
    // if there is info from "data" we put that in the input fields, if not, put these default values (displays info for the user who came from "/home")
    return dataObjToArr.length !== 0 ? data : initialState;
  });


  const [filteredCards, setFilteredCards] = useState(cardDetails);  //takes the object of data to loop through it and render it
  //takes the object of data to loop through it and render it

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let cardElements = cardDetails.filter(card => {
      return search.type === card.type.toLocaleLowerCase() && search.price === card.price
    })

    setFilteredCards(cardElements)
  };

  if (filteredCards.length === 0) {
    return "Error";
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            value={search.location}
            onChange={handleChange}
            placeholder="Location of your search"
          />
          <select name="type" value={search.type} onChange={handleChange}>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
            <option value="sold">Sold Out</option>
          </select>
          <select name="price" value={search.price} onChange={handleChange}>
            <option value="200">200</option>
            <option value="1.000">1.000</option>
            <option value="3.000">3.000</option>
          </select>
          <button>Submit</button>
        </form>
      </div>
      <div className="query-results">
        {/* This is the side the map occupies */}
        <Map />
        {/* This is the side the details occupy */}
        <div className="query-results--details">
          <div className="query-results--details--listings">
            {filteredCards.map((card, index) => (
              <PropertyItem {...card} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
