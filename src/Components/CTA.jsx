import React from 'react'

// importing Button component 
import Button from './Button';
// importing styles from style folder
import styles from '../style';

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient 
  rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col '>
      <h2 className={styles.heading2}>Let's try our service now</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everthing you need to accept card payments and grow business anywhere on the planet</p>
    </div>
    <div>
      <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}/>
    </div>
  </section>
)

export default CTA