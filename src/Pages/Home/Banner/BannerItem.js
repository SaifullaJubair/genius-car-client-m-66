import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
   const { image, next, prev, id } = slide
   return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
         <div className='banner-img'>
            <img src={image} alt='' className="w-full rounded-xl" />
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/3 mr-7 mb-7">
            <h1 className='text-6xl font-bold text-white'>
               Affordable <br />
               Price for Car <br />
               Servicing
            </h1>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5  top-1/2 mr-7 mb-7">
            <p className='text-white text-xl'>
               There are many variations of passages of  available, but the majority have suffered alteration in some form
            </p>
         </div>
         <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-3/5  top-2/3 mr-7 mb-7">
            <button className="btn btn-primary mr-5">Button</button>
            <button className="btn btn-outline btn-warning">Warning</button>

         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 mr-7 mb-7">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
      </div>
   );
};

export default BannerItem;