import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [orderId, setOrderId] = useState('');

  const handleOrder = () => {
    axios.post('https://uiexercise.onemindindia.com/api/OrderProducts', { productId: 'PRODUCT_ID_HERE' })
      .then(response => {
        setOrderId(response.data.orderId);
      })
      .catch(error => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <button onClick={handleOrder}>Place Order</button>
      {orderId && <p>Order placed! Order ID: {orderId}</p>}
    </div>
  );
}

export default OrderForm;