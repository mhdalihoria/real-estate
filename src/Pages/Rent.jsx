import { useState } from "react";
import Map from "../Components/Map";
import PropertyItem from "../Components/PropertyItem";
import { cardDetails } from "../utils/mockDB";

const Rent = () => {
  const [search, setSearch] = useState({
    location: "New Baghdad, Iraq",
    saleStatus: 'rent',
    price: "3000",
  });
  
  const [filteredCards, setFilteredCards] = useState(cardDetails);  //takes the object of data to loop through it and render it

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
      return search.saleStatus === card.type.toLocaleLowerCase() && search.price === card.price.replace(".",'')
    })

    setFilteredCards(cardElements)
  };
  console.log(filteredCards);

  // if(filteredCards.length === 0) {
  //   return "Error"
  // }

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
          <select
            name="saleStatus"
            value={search.saleStatus}
            onChange={handleChange}
          >
            <option value="sale">For Sale</option>
            <option value="rent">
              For Rent
            </option>
            <option value="sold">Sold Out</option>
          </select>
          <select name="price" value={search.price} onChange={handleChange}>
            <option value="200">200</option>
            <option value="1000">1000</option>
            <option value="3000">
              3000
            </option>
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
            {
              filteredCards.map((card, index) =><PropertyItem {...card } key={index} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rent;
