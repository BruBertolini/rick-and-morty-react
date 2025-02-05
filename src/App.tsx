import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharacterSearchPage from "./pages/CharactersSearchPage";
import './App.scss';
import siteImage from './assets/logo.png';

const App: React.FC = () => {
  return (<div className="App">
    <div className="d-flex flex-row gap-5 justify-content-center align-items-center">
      <img className="img-title" src={siteImage} />
      <h1 className="text-center my-4 rm-font display-3">Rick and Morty</h1>
    </div>
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<CharacterSearchPage />} />
        </Routes>
      </Router>
    </div>
  </div>
  );
};

export default App;
