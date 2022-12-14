import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [])
   return (
      <div>
         <div className='text-center mb-6'>
            <p className='text-2xl font-bold text-orange-600'>Services</p>
            <h2 className='text-5xl font-semibold '>
               Our Service Area
            </h2>
            <p className='mt-5'>
               The majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable.
            </p>
         </div>
         <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10'>
            {
               services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
               ></ServiceCard>)
            }
         </div>
         <div className='text-center mb-20'>
            <button className='btn btn-primary'>More Services</button>
         </div>
      </div>
   );
};

export default Services;