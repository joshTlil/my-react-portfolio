import './App.css';
import Contacts from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './Components/NavBar';
import React, { useState } from 'react';
const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contacts />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <title>
        Joshua Thomas
      </title>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

     
    </div>
  );
}

export default App;
