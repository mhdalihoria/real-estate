import { useState, useContext } from "react";
import { ContextObj, initialState } from "../Context";
import { useNavigate } from "react-router-dom";
import CarouselContainer from "../Components/CarouselContainer"

const Home = () => {
  const { setData } = useContext(ContextObj);

  const [search, setSearch] = useState(initialState);

  const navigate = useNavigate();

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
    setData(search);
    navigate("/rent");
  };

  return (
    <div>
      <CarouselContainer />
      <div className="form-container home-form-container">
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
            <option value="rent">
              For Rent
            </option>
            <option value="sold">Sold Out</option>
          </select>
          <select name="price" value={search.price} onChange={handleChange}>
            <option value="200">200</option>
            <option value="1.000">1.000</option>
            <option value="3.000">3.000</option>
          </select>
          <select name="roomCount" value={search.roomCount} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select name="bedCount" value={search.bedCount} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
