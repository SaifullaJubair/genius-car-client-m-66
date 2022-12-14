import React from 'react';
import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'

const About = () => {
   return (
      <div className="hero my-20">
         <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2 relative'>
               <img src={person} alt='' className="w-4/5 h-full rounded-lg shadow-2xl" />
               <img src={parts} alt='' className="absolute w-3/5 right-5 top-1/2 rounded-lg border-8" />
            </div>
            <div className='w-1/2'>
               <p className='text-2xl text-orange-600 font-bold'>About US</p>
               <h1 className="my-5 text-5xl font-bold">
                  We are qualified <br />
                  & of experience <br />
                  in this field</h1>
               <p className="py-6">We are qualified & of experience in this field</p>
               <p className="pb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
               <button className="btn btn-primary">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;