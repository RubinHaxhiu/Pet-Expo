import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Cats = () => {
  const navigate = useNavigate();

  const [cats, setCats] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const getCats = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/cats");
      console.log(response.data);
      setCats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchCats = async (query) => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/cats?search=${encodeURIComponent(
          query
        )}`
      );
      setCats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCats();
  }, []);

  const toggleModal = (theCat) => {
    setSelectedCat(theCat);
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      searchCats(searchQuery);
    }
  };

  return (
    <>
      <nav className="pets-navbar">
        <h1 onClick={() => navigate("/")}>Home Page</h1>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </nav>

      <div className="types-card-container">
        {cats.map((characteristic, index) => (
          <div
            className="types-card"
            key={index}
            onClick={() => toggleModal(characteristic)}
          >
            <img src={characteristic.image} alt={characteristic.name} />
            <h1>{characteristic.name}</h1>
            <h1>{characteristic.origin}</h1>
          </div>
        ))}

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-modal" onClick={toggleModal}>
                &times;
              </span>
              <div className="modal-container">
                <img src={selectedCat.image} alt={selectedCat.name} />
                <h2>Name: {selectedCat.name}</h2>
                <h3>Origin: {selectedCat.origin}</h3>
                <h3>Temperament: {selectedCat.temperament}</h3>
                <h3>Colors: {selectedCat.colors.join(", ")}</h3>
                <h4>Description: {selectedCat.description}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cats;
