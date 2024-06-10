import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Birds = () => {

    const navigate = useNavigate();

    const [birds, setBirds] = useState([]);
    const [searchQuery, setSearchQuery] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBird, setSelectedBird] = useState(null);
  
    const getBirds = async () => {
      try {
        const response = await axios.get("https://freetestapi.com/api/v1/birds");
        console.log(response.data);
        setBirds(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const searchBirds = async (query) => {
      try {
        const response = await axios.get(`https://freetestapi.com/api/v1/birds?search=${encodeURIComponent(query)}`)
        setBirds(response.data)
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getBirds();
    }, []);
  
    const toggleModal = (theBird) =>{
      setSelectedBird(theBird)
      setIsModalOpen(!isModalOpen) 
    } 

    const handleSearchChange = (e) =>{
      setSearchQuery(e.target.value)
    }

    const handleSearchSubmit = (e) =>{
      e.preventDefault()
      if (searchQuery.trim() !== "") {
        searchBirds(searchQuery)
      }
    }
  
    return (
      <>
      <nav className="pets-navbar">
        <h1 onClick={() => navigate('/')}>Home Page</h1>
        <form onSubmit={handleSearchSubmit}>
          <input 
          type="text"
          placeholder='Search By name...'
          value={searchQuery}
          onChange={handleSearchChange}
          />
          <button type='submit'>Search</button>
        </form>
      </nav>

        <div className="types-card-container">
          {birds.map((characteristic, index) => (
            <div className="types-card" key={index} onClick={() => toggleModal(characteristic)}>
              <img src={characteristic.image} alt={characteristic.name} />
              <h1>{characteristic.name}</h1>
              <h1>{characteristic.place_of_found}</h1>
            </div>
          ))}
  
          {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
                <span className="close-modal" onClick={toggleModal}>&times;</span>
              <div className="modal-container">
                <img src={selectedBird.image} alt={selectedBird.name} />
                <h2>Name: {selectedBird.name}</h2>
                <h3>Species: {selectedBird.species}</h3>
                <h3>Family: {selectedBird.family}</h3>
                <h3>Habitat: {selectedBird.habitat}</h3>
                <h3>Place of Found: {selectedBird.place_of_found}</h3>
                <h3>Diet: {selectedBird.diet}</h3>
                <h3>{selectedBird.wingspan_cm ? "Wingspan In CM:" : "Height In CM:" } {selectedBird.wingspan_cm || selectedBird.height_cm}</h3>
                <h3>Weight In KG: {selectedBird.weight_kg}</h3>
                <h4>Description: {selectedBird.description}</h4>
          </div>
          </div>
          </div>
          )}
        </div>
      </>
    );
}

export default Birds;
