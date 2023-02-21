import styles from "./Card.module.css"
import favoriteIcon from "./favorite_off.png"

function Card({ id, title, coverImage }) {
  return (
    <div className={styles.container}>

        <img 
            src={coverImage} 
            alt={title} 
            className={styles.coverImage}
        />

        <h2>{title}</h2>

        <img 
            src={favoriteIcon} 
            alt="Icone de Favoritar" 
            className={styles.favorite}
        />

    </div>
  )
}


export default Card
