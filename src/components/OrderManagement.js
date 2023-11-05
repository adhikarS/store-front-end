import React from 'react';
import OrderList from './OrderList'; // Adjust the path if `OrderList` is in a different directory

const OrderManagement = () => {
  return (
    <div>
      <h1>Order Management</h1>
      <OrderList /> {/* This line adds the OrderList component to your page */}
    </div>
  );
};

export default OrderManagement;
