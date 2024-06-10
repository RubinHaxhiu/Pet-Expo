import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dogs = () => {
  
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState(null);

  const getDogs = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/dogs");
      console.log(response.data);
      setDogs(response.data);
    } catch (error) {
      console.log(error);
    }
  }; 

  const searchDogs = async (query) => {
    try {
      const response = await axios.get(
        `https://freetestapi.com/api/v1/dogs?search=${encodeURIComponent(query)}`
      );
      console.log(response.data);
      setDogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDogs();
  }, []);

  const toggleModal = (theDog) => {
    setSelectedDog(theDog);
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      searchDogs(searchQuery);
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

      <div className="pets-page">
        <div className="types-card-container">
          {dogs.map((characteristic, index) => (
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
                  <img src={selectedDog.image} alt={selectedDog.name} />
                  <h2>Name: {selectedDog.name}</h2>
                  <h2>Breed Group: {selectedDog.breed_group}</h2>
                  <h3>Size: {selectedDog.size}</h3>
                  <h3>Lifespan: {selectedDog.lifespan}</h3>
                  <h3>Origin: {selectedDog.origin}</h3>
                  <h3>Temperament: {selectedDog.temperament}</h3>
                  <h3>Colors: {selectedDog.colors.join(", ")}</h3>
                  <h4>Description: {selectedDog.description}</h4>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dogs;
