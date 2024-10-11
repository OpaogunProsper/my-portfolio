import React from 'react'
import { getImageUrl } from './utils'
import styles from "./Contact.module.css"
const Contact = () => {
   return (
     <footer id="contact" className={styles.container}>
       <div className={styles.text}>
         <h2>Contact</h2>
         <p>Feel free to reach out!</p>
       </div>
       <ul className={styles.links}>
         <li className={styles.link}>
           <a href="mailto:prosperopaogun@gmail.com">
             <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
           </a>
         </li>
         <li className={styles.link}>
           <a href="https://www.linkedin.com/in/prosperopaogun/">
             <img
               src={getImageUrl("contact/linkedinIcon.png")}
               alt="LinkedIn icon"
             />
           </a>
         </li>
         <li className={styles.link}>
           <a href="https://www.github.com/OpaogunProsper">
             <img
               src={getImageUrl("contact/githubIcon.png")}
               alt="Github icon"
             />
           </a>
         </li>
       </ul>
     </footer>
   );
}

export default Contact
