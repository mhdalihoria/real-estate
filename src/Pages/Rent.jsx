import { useState, useContext, useEffect, useMemo } from "react";
import { ContextObj, initialState } from "../Context";
import PropertyItem from "../Components/PropertyItem";
import Map from "../Components/Map";
import Error from "../Components/Error";
import { cardDetails } from "../utils/mockDB";

const Rent = () => {
  const { data, randomCoordinates } = useContext(ContextObj); //receives data from context
  const dataObjToArr = Object.keys(data); //Transforming the Object to an array for later use
  const [search, setSearch] = useState(() => {
    //the state that holds the search query that will be used to filter the data from MockDB
    // if there is info from "data" we put that in the input fields, if not, put these default values (displays info for the user who came from "/home")
    return dataObjToArr.length !== 0 ? data : initialState;
  });

  const [filteredCards, setFilteredCards] = useState(cardDetails);

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

    setFilteredCards(filterCards);
  };

  const filterCards = () => {
    let cardElements = cardDetails.filter((card) => {
      return (
        search.type === card.type.toLocaleLowerCase() &&
        search.price === card.price &&
        search.bedCount === card.bedCount
      );
    });

    return cardElements;
  };

  const coords = useMemo(() => randomCoordinates, []);

  useEffect(() => {
    if (dataObjToArr.length !== 0) {
      setFilteredCards(filterCards);
    }
  }, [data]);

  if (filteredCards.length === 0) {
    return <Error/>;
  }

  return (
    <div>
      <div className="search-section">
        <div className="form-title">
          <h1 className="strong-text">Rent Your Perfect Property</h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="form-search">
            <div className="form-search-parameters">
            <input
              className="search-input"
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
              <option value="200">200 USD</option>
              <option value="1.000">1.000 USD</option>
              <option value="3.000">3.000 USD</option>
            </select>
            <select
              name="roomCount"
              value={search.roomCount}
              onChange={handleChange}
            >
              {/* <option value="2" label="somethin">Rooms</option> */}
              <option value="1">Rooms: 1</option>
              <option value="2">Rooms: 2</option>
              <option value="3">Rooms: 3</option>
              <option value="4">Rooms: 4</option>
            </select>
            <select
              name="bedCount"
              value={search.bedCount}
              onChange={handleChange}
            >
              <option value="1">Beds: 1</option>
              <option value="2">Beds: 2</option>
              <option value="3">Beds: 3</option>
              <option value="4">Beds: 4</option>
            </select>
            </div>
            <button className="submit-form-btn">Search</button>
          </form>
        </div>
      </div>
      <div className="query-results">
        {/* This is the side the map occupies */}
        <Map coords={coords} />
        {/* This is the side the details occupy */}
        <div className="query-results--details">
          <div className="query-results--details--header">
            <div className="query-results--details--header__data">
              <h1 className="strong-text query--details--header__title">
                Kansas Rental Buildings:
              </h1>
              <h2 className="regular-text query--details--header__details">
                112 Results
              </h2>
            </div>
            <div className="query-results--details--header__dropdown">
              <h4 className="details--header__dropdown--title regular-text">
                Sort By:
              </h4>
              <select
                name=""
                id="select-by"
                className="details--header__dropdown"
              >
                <option value="name" defaultValue={"name"}>
                  Name
                </option>
              </select>
            </div>
          </div>
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
