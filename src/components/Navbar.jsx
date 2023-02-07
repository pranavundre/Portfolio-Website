import React, {useEffect, useState} from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState (false);

  const menuLinks = [{
    name: "HOME", link : "#home"
  }, {
    name: "ABOUT", link : "#about"
  }, {
    name : "SKILLS", link : "#skills"
  },{
    name : "PROJECTS", link : "#projects"
  },{
    name : "CONTACT", link : "#contact"
  }];

  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    })
  })

  return <nav className={`fixed w-full left-0 top-0 z-[999] ${ sticky ? "bg-white/60 text-gray-900" : "text-white"}`}>
    <div className="flex items-center justify-between">
      <div className="md:mx-8 my-auto pl-4">
        <h4 className="text-4xl uppercase font-bold tracking-wider">
          Prana<span className="text-blue-600">v</span>
        </h4>
      </div>
      <div className={`${sticky ? "bg-white/0" : "bg-white"} text-gray-900 md:block hidden px-10 py-4 font-medium rounded-bl-3xl `}>
        <ul className="flex items-center gap-1 py-2 text-lg">
          {
            menuLinks?.map((menu, i) => (
              <li className="px-6 text-blue-900 hover:text-blue-600" key = {i}>
                <a href={menu?.link}>
                  {menu?.name}
                </a>
              </li>
            ))
          }
        </ul>          
      </div>


      <div 
      onClick={()=>setOpen(!open)}
      className = {`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-4xl md:hidden mt-6 mb-4 mr-4`}>
        <ion-icon name = "menu"></ion-icon>
      </div>

      <div className={`md:hidden text-gray-800 absolute w-2/3 h-screen px-4 py-2 font-medium bg-white top-0 duration-500 ${
        open ? "right-0" : "right-[-100%]"
        }`}>
        <ul className="flex flex-col justify-center h-full gap-4 py-2 text-lg ">
          {
            menuLinks?.map((menu, i) =>  (
              <li className="px-6 hover:text-blue-400" key = {i}>
                <a href = {menu?.link}> {menu?.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  </nav>;
};

export default Navbar;
