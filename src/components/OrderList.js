import React, { useState, useEffect } from 'react';
import mockOrders from './mockOrders';

const OrderList = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    // This effect runs when the statusFilter changes.
    // If you are fetching orders from a server, you would trigger that here.
  }, [statusFilter]);

  const handleStatusChange = (orderNumber, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.orderNumber === orderNumber) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
    // Here you would also update the server with the new status
  };

  const handleFilterChange = (newFilter) => {
    setStatusFilter(newFilter);
  };

  const filteredOrders = statusFilter === 'all' ? orders : orders.filter(order => order.status === statusFilter);

  return (
    <div>
      <h2>Order List</h2>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('pending')}>Pending</button>
        <button onClick={() => handleFilterChange('in progress')}>In Progress</button>
        <button onClick={() => handleFilterChange('ready for pickup')}>Ready for Pickup</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
      <ul>
        {filteredOrders.map((order, index) => (
          <li key={index}>
            Order #{order.orderNumber}: {order.customerName} - Total: ${order.totalPrice} - Status:
            <select value={order.status} onChange={(e) => handleStatusChange(order.orderNumber, e.target.value)}>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="ready for pickup">Ready for Pickup</option>
              <option value="completed">Completed</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
