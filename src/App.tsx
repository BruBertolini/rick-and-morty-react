import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharacterSearchPage from "./pages/CharactersSearchPage";

const App: React.FC = () => {
  return (<div className="App">
    <h1 className="text-center my-4">Rick and Morty</h1>
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
