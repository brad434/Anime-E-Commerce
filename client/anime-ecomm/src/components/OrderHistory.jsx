// ------------------------------- Tier 2 ---------------------------------------
// will continue to look into this

// import React, { useEffect, useState } from "react";


  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(
          `https://anime-e-commerce-backend.onrender.com/order-history/${userId}`
        );
        const data = await response.json();
        setOrderHistory(data.history);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

// const OrderHistory = ({ userId }) => {
//   const [orderHistory, setOrderHistory] = useState([]);

//   useEffect(() => {
//     const fetchOrderHistory = async () => {
//       try {
//         const response = await fetch(
//           `https://anime-ecomm-database-7caa7cadec94.herokuapp.com/order-history/${userId}`
//         );
//         const data = await response.json();
//         setOrderHistory(data.history);
//       } catch (error) {
//         console.error("Error fetching order history:", error);
//       }
//     };

//     fetchOrderHistory();
//   }, [userId]);

//   return (
//     <div>
//       <h2>Order History</h2>
//       {orderHistory.length === 0 ? (
//         <p>No orders found</p>
//       ) : (
//         orderHistory.map((order, index) => (
//           <div key={index}>
//             <h3>Order {index + 1}</h3>
//             {order.items.map((item, idx) => (
//               <div key={idx}>
//                 <p>
//                   {item.name} - {item.quantity} x ${item.price}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistory;
