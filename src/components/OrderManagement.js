import React, { useState } from 'react';
import OrderList from './OrderList';

const OrderManagement = () => {
  const [statusFilter, setStatusFilter] = useState('all');

  const handleFilterChange = (status) => {
    setStatusFilter(status);
  };

  return (
    <div>
      <h1>Order Management</h1>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('pending')}>Pending</button>
        <button onClick={() => handleFilterChange('in progress')}>In Progress</button>
        <button onClick={() => handleFilterChange('ready for pickup')}>Ready for Pickup</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
      <OrderList statusFilter={statusFilter} />
    </div>
  );
};

export default OrderManagement;
