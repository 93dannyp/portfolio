import React from "react"
// import './App.css';

const allTheFoodsThumb = require('./pictures/allTheFoodsThumb.jpeg')
 
function AllTheFoods(props) {
  return (
    <div className='flex flex-col justify-center w-full bg-gray-800 text-white'>
        <h1 className="mt-12 mb-8 text-3xl mx-auto">All the Foods</h1>
        <p className="w-2/3 mx-auto">All the Foods is a food ordering app where users create an account to browse their favorite restaurants, add dishes to their cart, and check out using Stripe.</p>
        <div className="flex flex-row justify-around my-4 w-2/3 mx-auto">
          <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href="https://github.com/danielperkinsii/all-the-foods">Front End Repo</a>
          <a className="hover:bg-indigo-600 hover:text-white shadow-lg rounded-lg py-6 px-12 animate-pulse transition ease-in-out duration-700" href="https://github.com/danielperkinsii/all-the-foods-backend">Back End Repo</a>
        </div>
        <div className="flex flex-col">
        <img className="w-2/3 mx-auto rounded-lg " src={allTheFoodsThumb}/>
        <div className="mx-auto text-xs">thumbnail and main images borrowed from www.unsplash.com</div>
        </div>
        <div className="w-2/3 mx-auto my-12">
        <h3 className="text-xl mb-4">About this Project</h3>
        <p className="mt-4">This app was built based on a <a href="https://strapi.io/blog/nextjs-react-hooks-strapi-food-app-1">tutorial</a> using Strapi and Next.js. I used Tailwind CSS to style the front end instead of Bootstrap, like the tutorial does. My main reason for building this api and web app was to learn more about GraphQL, Strapi, and Apollo. 
        </p>
        <p className="mt-2">
          All the Food's features include user login, registration, authentication, image upload, restaurant creation, dish creation, cart functionality, and Stripe order integration.
        </p>
      </div>
    </div>
  )
}
 
export default AllTheFoods;
