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
           <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
           <a href="mailto:prosperopaogun@gmail.com">
             prosperopaogun@gmail.com
           </a>
         </li>
         <li className={styles.link}>
           <img
             src={getImageUrl("contact/linkedinIcon.png")}
             alt="LinkedIn icon"
           />
           <a href="https://www.linkedin.com/in/prosperopaogun/">
             linkedin.com/in/prosperopaogun/
           </a>
         </li>
         <li className={styles.link}>
           <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
           <a href="https://www.github.com/OpaogunProsper">github.com/OpaogunProsper</a>
         </li>
       </ul>
     </footer>
   );
}

export default Contact
