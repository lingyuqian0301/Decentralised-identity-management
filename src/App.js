import React, { useState } from 'react';
import './App.css';
import CreateNFTButton from './CreateNFTButton';
function App() {
  const [name, setName] = useState('penguin');
  const [matricCard, setMatricCard] = useState('A001');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Name:', name);
    console.log('Matric Card:', matricCard);
  };

  return (
    <div className="App">
      <h1>Photo and Information Input</h1>
      <form onSubmit={handleSubmit}>
        <div className="photo-container">
          <img 
            src="/Shengzhong-Zhao.png" 
            alt="Shengzhong Zhao" 
            className="photo" 
            onError={(e) => {
              console.error("Error loading image:", e);
              e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
            }}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="matric">Matric Card:</label>
          <input
            type="text"
            id="matric"
            name="matric"
            value={matricCard}
            onChange={(e) => setMatricCard(e.target.value)}
            required
          />
        </div>
        <CreateNFTButton />
      </form>
    </div>
  );
}

export default App;
