import React from 'react';
// import Array of Stats from constants file
import { stats } from '../constants';
// import CSS file from style folder
import styles from '../style';

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {/* mapping a stats Array in a div   */}
      {stats.map((stats) => (
        <div key={stats.id} className={`flex-1 justify-start items-center flex-row flex m-3`}>
           <h4 className='font-poppins mr-1 font-semibold xs:text-[40px] text-[20px] xs:leading-[53px] leading-[30px] text-white'>{stats.value}</h4>
           <p className='text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]'>{stats.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats