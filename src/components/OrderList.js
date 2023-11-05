import React, { useState, useEffect } from 'react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch('/data/orders.json'); // Adjust if your path is different
      const data = await response.json();
      setOrders(data);
    };

    fetchOrders().catch(console.error);
  }, []);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            Order #{order.id}: {order.customerName} - Total: ${order.total} - Status: {order.status}
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
