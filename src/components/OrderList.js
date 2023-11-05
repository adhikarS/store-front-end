import React from 'react';
import mockOrders from './mockOrders'; // Make sure this path is correct

const OrderList = ({ statusFilter }) => {
  // Directly use mockOrders as the state
  const [orders] = React.useState(mockOrders);

  // Filter orders based on the statusFilter prop
  const filteredOrders = statusFilter === 'all' ? orders : orders.filter(order => order.status === statusFilter);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {filteredOrders.map((order, index) => (
          // Add className to li element
          <li key={index} className={`order-item status-${order.status.replace(/\s+/g, '-').toLowerCase()}`}>
            Order #{order.orderNumber}: {order.customerName} - Total: ${order.totalPrice} - Status: {order.status}
            <ul>
              {order.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
