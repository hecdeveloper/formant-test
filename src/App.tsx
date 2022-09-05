import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './layout/Login';
import Start from './pages/Start';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/robots" element={<Layout />}>
          <Route index element={<Start />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
