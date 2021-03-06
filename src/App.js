import React from "react";
import "./App.css"
import { NavLink, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Quotes from "./components/Quotes.js"
import ImgGenerator from "./components/ImgGenerator";
import TriviaList from "./components/TriviaList";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Andre's Anime Apps</h1>
        
        <nav className="navigation">
          <NavLink
            id="home" 
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'blueviolet' : 'deepskyblue'
            })}
          >
            Home
          </NavLink>

          <NavLink 
            id='quotes' 
            to="/quotes"
            style={({ isActive }) => ({
              color: isActive ? 'blueviolet' : 'deepskyblue'
            })}
          >
            Quotes
          </NavLink>
          <NavLink 
            id="img-generator" 
            to="/img-generator"
            style={({ isActive }) => ({
              color: isActive ? "blueviolet" : "deepskyblue"
            })}
          >
            Generate Animage
          </NavLink>
          <NavLink
            id="trivia"
            to="/trivia"
            style={({ isActive }) => ({
              color: isActive ? "blueviolet" : "deepskyblue"
            })}
          >
            Trivia
          </NavLink>
        </nav>
      </div>
      

      <Routes>
        <Route path="/trivia" 
          element={<TriviaList />}
        />
        <Route path="/img-generator" 
          element={<ImgGenerator />}
        />
        <Route path="/quotes" 
          element={<Quotes />}
        />
        <Route path="/" 
          element={<Home />}
        />
      </Routes>
    </div>
  );
}












export default App;
