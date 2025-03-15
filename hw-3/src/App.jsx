import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import UsersList from './pages/UsersList/UsersList.jsx';
import UserDetailsPage from './pages/UserDetailsPage/UserDetailsPage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/users" />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;