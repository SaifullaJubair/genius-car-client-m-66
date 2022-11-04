import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
   const { serviceName, price, customer, email, phone, message, service } = order;
   const [orderService, setOrderService] = useState([])
   useEffect(() => {
      fetch(`http://localhost:5000/services/${service}`)
         .then(res => res.json())
         .then(data => setOrderService(data))
   }, [service])
   return (

      <tr>
         <th>
            <label>
               <button className="btn btn-ghost" >X</button>
            </label>
         </th>
         <td>
            <div className="flex items-center space-x-3">
               <div className="avatar">
                  <div className="rounded w-16 h-16">
                     {
                        orderService?.img &&
                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                  </div>
               </div>
               <div>
                  <div className="font-bold">{customer}</div>
                  <div className="text-sm opacity-50">{phone} </div>
               </div>
            </div>
         </td>
         <td>
            {serviceName}
            <br />
            <span className="badge badge-ghost badge-sm">$ {price} </span>
         </td>
         <td>Purple</td>
         <th>
            {/* The button to open modal */}
            <label htmlFor={service} className="btn btn-ghost">Details</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={service} className="modal-toggle" />
            <div className="modal">
               <div className="modal-box">

                  <div className="card card-compact w-96 bg-base-100 shadow-xl">
                     <figure><img src={orderService.img} alt='' /></figure>
                     <div className="card-body">
                        <h2 className="card-title">{serviceName}</h2>
                        <p>Details: {message}</p>
                        <p> Price: $ {price}</p>
                        <div className="card-actions modal-action justify-end">
                           <label htmlFor={service} className="btn">Close Details!</label>
                        </div>
                     </div>
                  </div>

                  <div className="">

                  </div>
               </div>
            </div>
         </th>
      </tr>

   );
};

export default OrderRow;