import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OrderProvider } from './OrderContext'; // Adjust the path as needed
import NavBar from './components/NavBar'; // Adjust the path as needed
import HomePage from './components/HomePage'; // Adjust the path as needed
import OrderManagement from './components/OrderManagement'; // Adjust the path as needed
import LiveTracking from './components/LiveTracking'; // Adjust the path as needed
import NotFound from './components/NotFound'; // Adjust the path as needed

function App() {
  return (
    <Router>
      <OrderProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order-management" element={<OrderManagement />} />
          <Route path="/live-tracking" element={<LiveTracking />} />
          <Route path="*" element={<NotFound />} />
          {/* Add other routes as needed */}
        </Routes>
      </OrderProvider>
    </Router>
  );
}

export default App;
