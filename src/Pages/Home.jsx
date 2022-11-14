import {useState} from 'react'

const Home = () => {

  const [search, setSearch] = useState({
    location: "",
    saleStatus: 'rent',
    price: "3000",
  });

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
    
    console.log(search)
  };
  
  return (
    <div>
      <div className="title">
        Home
      </div>
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
    </div>
  )
}

export default Home