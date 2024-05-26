import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto relative'>
      <div className='flex flex-col items-start'>
        <h1 className='text-5xl font-bold mb-4 text-slate-800'>
          Welcome to my Batra Estate!
        </h1>
        <p className='mb-4 my-12 text-slate-700'>
          This is a full-stack web application built with the MERN (MongoDB,
          Express, React, Node.js) stack. It includes authentication features that
          allow users to sign up, log in, and log out, and provides access to
          protected routes only for authenticated users.
        </p>
        <p className='mb-4 text-slate-700'>
          The front-end of the application is built with React and uses React
          Router for client-side routing. The back-end is built with Node.js and
          Express, and uses MongoDB as the database. Authentication is implemented
          using JSON Web Tokens (JWT).
        </p>
        <p className='mb-4 text-slate-700'>
          The modern real estate landscape is undergoing a profound transformation driven by rapid technological advancements and evolving consumer preferences. As digital innovation permeates every aspect of our lives, the way properties are bought, sold, and rented is also changing dramatically. Today’s real estate market is not just about finding a place to live or work; it’s about finding a property that aligns perfectly with one's lifestyle and needs. This has led to a growing demand for properties that come fully furnished and equipped with essential amenities, such as parking facilities.
        </p>
      </div>
      <img
        src="https://i.ibb.co/thCnqH1/harsh-p.jpg"
        alt="harsh-p"
        className="absolute top-0 right-0 h-32 w-32 m-4" // Adjusted height and width
      />
    </div>
  );
}