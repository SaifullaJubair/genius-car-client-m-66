import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../assets/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
   const { user } = useContext(AuthContext);
   const [orders, setOrders] = useState([])

   useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${user?.email}`)
         .then(res => res.json())
         .then(data => setOrders(data))
   }, [user?.email])

   const handleDelete = (id) => {
      const proceed = window.confirm('Are you sure want to cancel your order')
      if (proceed) {
         fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
         })
            .then(res => res.json())
            .then(data => {
               console.log(data);
               if (data.deletedCount > 0) {
                  alert('deleted Successfully')
                  const remaining = orders.filter(odr => odr._id !== id);
                  setOrders(remaining)
               }
            })
      }
   }
   const handleStatusUpdate = id => {
      fetch(`http://localhost:5000/orders/${id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({ status: 'Approved' })
      })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if (data.modifiedCount > 0) {
               const remaining = orders.filter(odr => odr._id !== id)
               const approving = orders.find(odr => odr._id === id);
               approving.status = 'Approved'
               const newOrders = [approving, ...remaining];
               setOrders(newOrders)
            }
         })

   }

   return (

      <div className='my-10'>
         <h1 className='text-center text-4xl font-semibold my-10'>You Have {orders.length} Orders,</h1>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>Delete</th>
                     <th>Name</th>
                     <th>Job</th>
                     <th>Favorite Color</th>
                     <th>Order Details</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     orders.map(order => <OrderRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}

                     ></OrderRow>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Orders;