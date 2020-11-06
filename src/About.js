import React from "react"
import Twitter from "./TwitterContainer";
import Medium from "./MediumContainer";
 
function About(props) {
  return (
    <div className="h-screen flex content-start bg-gray-400">
      <div className="flex flex-col w-1/4 my-2 mx-1 ml-1 p-4 bg-white rounded-md">
        <h1 className="text-xl font-semibold">bio</h1>
        <p className="py-1 font-semibold">Hi, I'm Daniel.</p>
        <small className="">I'm a small business owner who designs and builds websites that make the internet a better place.</small>
        <div className="my-8 flex flex-col">
          <p className="font-semibold">Connect with me.</p>
            <a className="hover:text-blue-400 hover:semibold hover:bg-blue-100 -mx-2 px-2 py-4 rounded-md hover:text-xl  transition ease-in-out duration-700" href="https://twitter.com/danielperkinsii">Twitter</a>
            <a className="hover:text-green-600 hover:semibold hover:bg-green-100 -mx-2 px-2 py-4 rounded-md hover:text-xl  transition ease-in-out duration-700" href="https://github.com/danielperkinsii">GitHub</a>
            <a className="hover:text-blue-700 hover:semibold hover:bg-blue-100 -mx-2 px-2 py-4 rounded-md hover:text-xl transition ease-in-out duration-700" href="https://www.linkedin.com/in/daniel-perkins-b477871a7/">LinkedIn</a>
            <a className="hover:text-pink-600 hover:semibold hover:bg-pink-100 hover:text-xl transition ease-in-out duration-700 -mx-2 px-2 py-4 rounded-md" href="https://www.instagram.com/93dannyp/">Instagram</a>
        </div>
      </div>
      <div className="flex w-full content-start flex overflow-hidden">
        <div className="flex flex-row justify-end w-full overflow-y-auto">
          <div className="flex flex-col w-2/3 my-2 mb-2 mx-1 p-4 bg-white rounded-md">
            <h1 className="text-xl font-semibold">blog</h1>
            <Medium />
          </div>
          <div className="flex flex-col w-1/3 my-2 mb-2 mx-1 py-4 pr-1 bg-white rounded-md">
            <a href="https://twitter.com/danielperkinsii" className="text-xl text-blue-400 mx-auto font-semibold  transition ease-in-out duration-700">@danielperkinsii</a>
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default About;
