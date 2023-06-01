import React from 'react';
// importing Assets images from Assets folder
import { apple, bill, google } from '../assets';
// importing styles and layout object of css style from style folder
import styles, { layout } from '../style';

const Billing = () => (
  <section id='product' className={`${layout.sectionReverse}`}>
    {/* left-side div container */}
    <div className={layout.sectionImgReverse}>
       <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
       {/* adding gradient self closing divn to look more realistic */}
       <div className='absolute w-[50%] h-[50%] top-0 -left-[50%] z-[3] rounded-full white__gradient'/>
       <div className='absolute w-[50%] h-[50%] bottom-0 -left-[50%] z-[3] rounded-full pink__gradient'/>
    </div>
    {/* right-side div container */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. maruis eu adipiscing ultrices ametodio aenean neque. fusce ipsum orcl rhoncus 
        altporttitor integer plates placerat
      </p>
      <div className='flex flex-row '>
        <img src={apple} className='w-[128px] h-[42px] object-contain cursor-pointer mt-10 mr-5' alt='apple_store'/>
        <img src={google} className='w-[128px] h-[42px] object-contain cursor-pointer mt-10 ' alt='google_store'/>
      </div>
    </div>
  </section>
)

export default Billing