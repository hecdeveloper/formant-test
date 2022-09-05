import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './layout/Login';
import LoginForm from './pages/LoginForm';
import NewRobot from './pages/NewRobot';
import EditRobot from './pages/EditRobot';
import Start from './pages/Start';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/robots" element={<Layout />}>
          <Route index element={<Start />} />
          <Route path="new" element={<NewRobot />} />
          <Route path="edit/:id" element={<EditRobot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
