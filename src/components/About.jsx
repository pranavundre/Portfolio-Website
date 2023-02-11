import React from "react";
import Profile from "../assets/images/Profile.png"
import Profile1 from "../assets/images/Profile1.png"

const About = () => {

  const info = [
    {text : 'Years Experience', count  : '04'},
    {text : 'Completed Projects', count  : '24'},
    {text : 'Companies Worked', count  : '06'},
  ]

  return <section id = "about" className= "py-10 text-white h-full ">
      <div className="text-center mt-8 md:pt-10">
        <h3 className="text-4xl">
          About <span className="text-blue-600 font-semibold">Me</span> 
        </h3> 
        <p className="text-gray-400 my-3 text-lg">
          My introduction
        </p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="text-gray-300 md:my-3">
              <p className="text-justify md:text-xl text-base leading-10 w-11/12 mx-auto">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum id, nemo velit autem error sed debitis tempora consectetur recusandae numquam eveniet deleniti temporibus totam eaque architecto cumque! Ipsam maiores numquam facilis porro, praesentium ad, tempora ea, blanditiis nam modi dignissimos reiciendis sit dolorem nisi. Accusantium culpa necessitatibus, ratione consequatur sit fugit. Perspiciatis dolores sapiente, autem ratione, ipsam tempore facere necessitatibus labore minus ipsa neque quo voluptas quas ex odio et magnam pariatur id? Modi, nostrum! Veritatis eius eaque, corrupti iure nostrum quo dolores error voluptatum totam id vitae! Excepturi, minima architecto temporibus quia necessitatibus reprehenderit tempora veritatis, qui quae tenetur
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ullam deleniti eum architecto atque, recusandae quo qui similique minus, fugiat quibusdam necessitatibus ipsa provident? Earum sequi, dolor fugiat temporibus dolore exercitationem magni nemo sapiente facere facilis corporis neque ex eius asperiores ipsam nobis perspiciatis, cum ratione quisquam ipsum. Earum, illum!
              </p>
              {/* <div className="flex mt-10 items-center gap-7">
                {
                  info.map(content=>(
                    <div key = {content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}</h3>
                      <span className="text-blue-400">{content.text}</span>
                    </div>
                  ))
                }

              </div> */}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-80 mt-4 h-full relative sm:w-10/12 w-11/12 max-w-sm">
              <img className="w-full object-cover" src={Profile1} alt="" />
            </div>
            
          </div>
        </div>
      </div>

  </section>
};

export default About;
