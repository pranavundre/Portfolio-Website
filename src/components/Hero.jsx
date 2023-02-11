import React from "react";

const Hero = () => {

  const social_media = [{
    name: "logo-github", logo: `<ion-icon name="logo-github"></ion-icon>`, link : "https://github.com/pranavundre"
  }, {
    name: "code-outline", logo: `<ion-icon name="code-outline"></ion-icon>`, link : "https://leetcode.com/pranavundre/"
  }, {
    name : "logo-linkedin", logo: `<ion-icon name="logo-linkedin"></ion-icon>`, link : "https://www.linkedin.com/in/pranav-undre-920961177/"
  },{
    name : "logo-instagram", logo: `<ion-icon name="logo-instagram"></ion-icon>`, link : "https://www.instagram.com/pranavuuu.dmg/"
  },{
    name : "logo-twitter", logo: `<ion-icon name="logo-twitter"></ion-icon>`, link : "https://twitter.com/pranav_undre"
  }];

  return <section
  id = "home" 
  className="min-h-screen flex py-10 md:flex-row flex-col items-center">
    <div className="flex-auto flex items-center justify-center h-full">
      {/* <img src={hero} alt="" className="md:w-11/12 h-full object-cover"/> */}
    </div>
    <div className="flex-auto">
      <div className="md:text-left text-center">
        <h1 className="md:text-5xl md:text-left text-2xl text-center md:leading-normal leading-10 text-white font-bold">
          <span className="text-blue-400 md:text-6xl text-5xl">Hello! 👋<br /></span>
          My name is <span>Pranav</span>
        </h1>
        <h4 className="md:text-2xl md:leading-normal leading-5 mt-4 text-base text-gray-400 font-light">Web Developer | Competitive Programmer</h4>
        
        <a href="src/assets/Pranav Undre Resume.pdf" target="new">
          <button className="bg-blue-500 md:mx-0 mx:auto px-6 py-3 rounded-full mt-8 md:text-xl text-base mx-auto flex items-center">Download Resume</button>
        </a>
        
        <div className="flex gap-6 md:gap-8 mt-8 text-2xl md:text-4xl text-gray-600 items-center md:justify-start justify-center">
            {
              social_media?.map((site) => (
                <div key = {site} className = "hover:text-blue-400">
                  <a href={site.link}>
                  <ion-icon name={site.name}></ion-icon>
                  </a>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  </section>;
};

export default Hero;
