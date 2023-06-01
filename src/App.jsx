import React from 'react';
// import style.js file 
import styles from './style';

// importing Components 
import { Navbar, Business, Button, Billing, CTA, Carddeal, Client, FeedbackCard, Footer, Getstarted, Hero, Stats, Testimonials,} from './Components';



const App = () => (

    
    <div className='bg-primary w-full overflow-hidden' >

        {/* // Navbar Component Section */}
       <div className={`${styles.paddingX} ${styles.flexCenter}` }>
         <div className={`${styles.boxWidth}`}>
            <Navbar />
         </div>
       </div>
       {/* Hero Component Section */}
      <div className={`${styles.flexCenter} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>
       {/* Other Components Section */}
      <div className={`${styles.flexCenter} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Carddeal />
            <Testimonials />
            <Client /> 
            <CTA /> 
            <Footer />
        </div>
      </div>

      

    </div>  
)

export default App