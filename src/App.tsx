

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// pages
import Home from '@/pages/Home';
import OurTeamPage from '@/pages/OurTeamPage';
import UsPage from '@/pages/UsPage';


function App() {
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pedraz" element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path="ourteam" element={<OurTeamPage />} />
          <Route path="us" element={<UsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    
  )
}

export default App
