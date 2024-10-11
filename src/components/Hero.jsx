import { getImageUrl } from '../utils'
import styles from "./Hero.module.css"
const Hero = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.description}>
           Hi there, I'm Prosper, a passionate full stack developer who recently completed an intensive software development boot-camp. With hands on experience in building dynamic web applications.
           Let's connect if you are looking for a dedicated developer!

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
