import { useState } from 'react';
// importing Images from Assets Folder
import { close, logo, menu } from '../assets';

// importing Navlinks from contants folder 
import { navLinks } from '../constants';




const Navbar = () => {
  
  // set useState to toggle Mobiledevice navbar icon from close to menu 
  const [ toggle, setToggle ] = useState(false);

  return (
   <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt='hookbank' className='w-[124px] h-[32px]'/>

      {/* Desktop Navbar */}
      <ul className='list-none sm:flex hidden justify-end items-center flex-1 '>
        {/* mapping over a[link] tag Through navLinks to make things dynamic and add some 
        logic to not giving a client a tag margin right */}
         {navLinks.map(( nav, index ) => (
           <li key={nav.id} className= {` font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10" }
            text-white  `}>

             <a href={`#${nav.id}`}>
              {nav.title}
             </a>

           </li>
         ))}
      </ul>

     {/* Mobile device navBar */}
       
       <div className='sm:hidden flex flex-1 justify-end items-center'>
           {/* adding onClick function to update useState to do that i add in callback fun in onClick and 
           to update setToggle i just pass setToggle in onClick fun as a callback fun 
            and i also add another callback fun in set to update 
           toggle*/}
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' 
          onClick={() => setToggle((prev) => !prev )}/>
       </div>
         {/* toggle Dynamically navdiv By using useState toggle by if toggle div display will be 
         flex if not it will be hidden  by  adding css */}
       <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 
       min-w-[200px]  sidebar`}>
           
          <ul className='list-none flex flex-col justify-end items-end flex-1 '>
        {/* mapping over a[link] tag Through navLinks to make things dynamic and add some 
        logic to not giving a client a tag margin right */}
         {navLinks.map(( nav, index ) => (
          
           <li key={nav.id} className= {` font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mb-12" }
            text-white  `}>
              
             <a href={`#${nav.id} `} className='relative'>
             <div className='w-[35px] bg-white h-[2px] absolute right-0  negative-value'></div>
              {nav.title}
             </a>

           </li>
         ))}
      </ul>

       </div>

   </nav>
  )
}

export default Navbar