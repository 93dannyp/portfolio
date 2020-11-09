import React from "react";
import logo from "./pictures/daniel.png";
 
function About() {
  return (
    <div className="flex items-start h-screen bg-gradient-to-b from-gray-300 to-gray-900">
      <div className="flex flex-col items-start my-12 mx-auto p-6 bg-white rounded-md w-full sm:w-2/3">
        <div className="flex flex-row">
        <div className="w-2/3">
            <h1 className="text-2xl">About Me</h1>
            <p className="py-2">Hey, I'm Daniel! I'm a freelance web developer based in the midwest, interested in collaborating on new projects while building a bigger client base. I previously worked in construction, but wanted more room for creativity so I sought software as my new craft. I love learning, networking, and building.</p>
       
          </div>
        <div className="flex justify-start items-end bg-gradient-to-r from-red-500 to-yellow-400 w-32 sm:w-64 h-40 rounded-md">
          <img src={logo} className="w-auto rounded-md" />
        </div>
          
        
          
        </div>
        <div className="py-1">
        <h2 className="text-xl">My Interests</h2>
        <ul className="flex flex-row flex-wrap justify-start">
          <li className="px-1">😺 My cat.</li>
          <li className="px-1">🏔 New challenges.</li>
          <li className="px-1">🎵 Pretty much all music.</li>
          <li className="px-1">👨‍💻 Learning technologies.</li>
          <li className="px-1">🏃💨 Running between 5k and 50k.</li>
          <li className="px-1">📚 Reading mystery, business, history, finance, design, sci-fi, and biographies.</li>
          <li className="px-1">🎙 Podcasts about tech, science, news, Kentucky sports, philosophy, and creativity.</li>
        </ul>
      </div>
      
      <div className="py-1">
        <h2 className="text-xl">How I Work</h2>
        <p>I'm at my best when I'm time blocking my tasks. I try to minimize meetings for the sake of meeting. My philosophy is that if it can be said in a meeting, it can probably be said in an email, and if it can be said in an email, it can probably be said in a text.</p>
        <p className="italic text-center">*However, I love networking and will carve out time to build new relationships.*</p>
      </div>
      <div className="py-1">
        <h2 className="text-xl">My Passion at Work</h2>
        <p>I’m fueled by helping small businesses gain a stronger foothold online. In an ever-changing virtual world, my most rewarding work is done when I’m helping small businesses gain visibility, increase their revenue, and display their best work on the internet.</p>
      </div>
      <div className="py-1">
      <h2 className="text-xl">Right Now I'm Looking For</h2>
      <p> Right now I’m looking for any and all projects that offer new challenges. Whether you're a business who needs an ecommerce website, an artist who needs a portfolio, or another developer with an interesting project, I can help you find the best fit for your needs. Let's build it together! </p>
      </div>
      <div className="py-1">
      <h2 className="text-xl">Let's Connect!</h2>
      <p className="">Email Me: <span className="text-blue-400 underline"><a href="mailto:daniel.perkins99@gmail.com">daniel.perkins99@gmail.com</a></span></p>
      </div>
      
      </div>
    </div>
  )
}
export default About;
