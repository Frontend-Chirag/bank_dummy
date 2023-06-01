import React from 'react';
// image from assets
import { card } from '../assets';
// import styles and layout css style object from style folder
import styles , { layout }from '../style';
// importing  Button component 
import Button from './Button';

const Carddeal = () => (
  <section className={layout.section}>
    {/* left-side div Container */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal<br className='sm:block hidden'/>i in few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget maruris torter. 
        Aliquet ultrices ac, ametau.
      </p>
      <Button styles='mt-10'/>
    </div>
    {/* right-side div container */}
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100% h-[100%]'/>
    </div>

  </section>
)

export default Carddeal