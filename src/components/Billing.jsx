import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Ensure your <br className='sm:block hidden'/> websites are protected</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We offer seamless security services via CloudFlare, ensuring your website is protected from attacks and other vulnerabilities.
        Additionally we have a 24/7 support team to help you with any issues you may have, so you can focus on growing your business and less on the technicalities.
        </p>
      </div>  
    </section>
  )
}

export default Billing
