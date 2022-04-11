import React from 'react';
import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <div className="container dark">
      <div className='app'>
      <Router>
      <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPage />} />
          <Route path='/note/:id' element={<NotePage />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
};

export default App;
