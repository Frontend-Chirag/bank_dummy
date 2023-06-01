import React from 'react';
// importimg some styles component of css file called style and layout
import styles , { layout } from '../style';
// importing A Array of Features which is coming from Constants folder 
import { features } from '../constants';
// Now importing a Button Component 
import Button from './Button';


// creating FeatureCard component for resuseblity and mapping over them
// getting the Properties of feature object through passing the props in FeatureCard
const FeatureCard = ({ icon, title, content, index}) => (
  // in first div i to want add margin bottom in all the index div but not in last one 
  // for doing this i just added some logic to not include the margin botton in the last one div through 
  // if and else    
  <div className={`${index !== features.length - 1 ? "mb-6" : "mb-0" } feature-card  flex flex-row p-6 rounded-[20px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimblue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins text-white font-semibold text-[18px] leading-[23px]'>{title}</h4>
      <p className='font-poppins text-dimwhite font-normal text-[16px] leading-[24px]'>{content}</p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id='features' className={layout.section}>
       <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the Business, <br className='sm:block hidden'/>
            we'll handle the money.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            with the right credit card, you can imporve your financial life by building credit, 
            earning rewards and saving money, But with hundreds of credit cards on the market. 
          </p>
          {/* passing props in Button component */}
          <Button styles='mt-10'/>
       </div>

       {/* features div  */}
       <div className={`${layout.sectionImg} flex-col`}>
         {/* mapping a array of features  through features which is comming from contants filoe */}
         {features.map((feat, index) => (
          
          // In FeatureCard i passed  key called feat.id for unique id and spreading all the feat Properties
          // in That way we get the all the properties of feature object  and passing a prop index
          //  which is equal to index parameter in map fun 
          <FeatureCard key={feat.id} {...feat} index={index}/>
         ))}
       </div>
    </section>
  )
}

export default Business