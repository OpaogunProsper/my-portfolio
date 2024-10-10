import { getImageUrl } from '../utils'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prosper</h1>
        <p className={styles.description}>
            I'm a full stack developer with 1 year of experience. Reach out if you'd like to work together

        </p>
        <a className={styles.contactBtn} href="mailto:prosperopaogun@gmail.com">Contact Me</a>
    </div>
    <img className={styles.heroImg}src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </section>
  )
}

export default Hero
