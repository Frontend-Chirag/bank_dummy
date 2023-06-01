import React from 'react';
// importing styles from style folder 
import styles from '../style';
// importing logo from Assets folder
import { logo } from '../assets';
// importing Array of object of socialMedia and footerLinks from constants 
// which contain a unique id ,image, title and links 
import { socialMedia, footerLinks } from '../constants';


const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt='logo' className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payment easy. realiable and secure
        </p>
      </div>
      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {/* mapping over footer link to get array of object with theri properties */}
        {footerLinks.map((footer) => (
          <div key={footer.key} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins text-[18px] leading-[27px] text-white font-medium'>{footer.title}</h4>
            {/* now mapping over links of footer under the ul tag because links also is a  array of object with their 
            different properties and links  then adding some logic for margin-botton and top */}
            <ul className='list-none '>{footer.links.map((links,index) => (
                <li key={links.name} className={`font-poppins font-normal text-[16px] leading-[24px] 
                text-dimwhite hover:text-secondary cursor-pointer 
                ${index !== footer.links.length - 1 ? 'mb-4' : 'mb-0'} ${index !== footer.links.length[1] ? 'mt-4' : 'mt-0'}` }>
                  {links.name}
                </li>
            ))}</ul>
          </div>
        ))}
      </div>
    </div>
     {/* div of Socialmedia links */}
    <div className='flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <p className='font-poppins text-[18px] leading-[27px] text-white font-normal text-center'>
        2023 HooBank. All Rights Reserved
      </p>
     {/* mapping over div social media links with their properties  */}
      <div className='flex flex-row md:mt-0 mt-6'>
         {socialMedia.map((socialMedia, index) => (
            <img key={socialMedia.id} src={socialMedia.icon} alt={socialMedia.id} 
            className={`w-[21px] h-21px object-contain cursor-pointer ${index !== socialMedia.length -1 ? 'mr-6' : 'mr-0'}`}/>
         ))}
      </div>
    </div>
  </section>

)

export default Footer