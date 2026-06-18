import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CascadingInputForm from './components/CascadingInputForm';
import FreeInputForm from './components/FreeInputForm';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/AddressEntry">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cascading-input" element={<CascadingInputForm />} />
        <Route path="/free-input" element={<FreeInputForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;