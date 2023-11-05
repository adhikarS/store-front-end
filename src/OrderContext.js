import React, { createContext, useState } from 'react';

// Create Context object
export const OrderContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const OrderProvider = (props) => {
  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};
