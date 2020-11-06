import React from "react"
import Twitter from "./TwitterContainer";
import Medium from "./MediumContainer";
 
function About(props) {
  return (
    <div className="h-screen bg-gray-300 w-full overflow-y-auto">
      <div className="flex justify-center items-start w-full py-10">
        <div className="flex flex-col justify-center w-1/6 my-2 mx-2 p-4 bg-white rounded-md">
          <h1 className="text-xl">bio</h1>
          <p className="py-1">Hi, I'm Daniel.</p>
          <small className="">I'm a small business owner who designs and builds websites that make the internet a better place.</small>
        </div>
        <div className="flex flex-col justify-center w-1/2 my-2 mx-2 p-4 bg-white rounded-md overflow-y-auto">
          <h1 className="text-xl">blog content</h1>
          <div>
            
            <Medium />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/5 my-2 mx-2 pt-4 bg-white rounded-md overflow-y-auto">
          <h1 className="text-xl text-blue-400 mx-auto">@danielperkinsii</h1>
          <div className="w-full">
          <Twitter />
            </div>
        </div>
      </div>
    </div>
  )
}
 
export default About;
