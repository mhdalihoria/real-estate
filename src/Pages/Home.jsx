import { useState, useContext } from "react";
import { ContextObj, initialState } from "../Context";
import { useNavigate } from "react-router-dom";
import CarouselContainer from "../Components/CarouselContainer";
import ExploreCards from "../Components/ExploreCards";

const Home = () => {
  const { setData } = useContext(ContextObj);

  const [search, setSearch] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    //  a function that controls form elements and saves their changing information to state
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
    // a function to redirect the user to the "Rent" page once the search query has been sent to Context API
    setData(search);
    navigate("/rent");
  };

  return (
    <div>
      <CarouselContainer />
      <div className="home-form-container">
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
            <option value="200">200$ (USD)</option>
            <option value="1.000">1.000$ (USD)</option>
            <option value="3.000">3.000$ (USD)</option>
          </select>
          <select
            name="roomCount"
            value={search.roomCount}
            onChange={handleChange}
          >
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

          <button>Results</button>
        </form>
      </div>

      <div className="explore-homes-container">
        <div className="explore-homes-title-section ">
          <h1 className="explore-homes-title strong-text">Explore Homes in IRAQ</h1>
          <p className="explore-homes-desc thin-text">
            Take a deep dive and browse homes for sale, original neighbourhood
            photos, resident reviews and local insights to find what is right
            for you.
          </p>
        </div>
        <ExploreCards />
      </div>

    </div>
  );
};

export default Home;
