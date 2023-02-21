import banner from "./banner-home.png"
import styles from "./Banner.module.css"

function Banner() {
  return (
    <img src={banner} alt="banner da home page" className={styles.banner}/>
  )
}

export default Banner;