import { useFavoriteContext } from "contexts/Favorites"
import styles from "./Card.module.css"
import favoriteIcon from "./favorite_off.png"
import favoriteIconFilled from "./favorite_on.png"

function Card({ id, title, coverImage }) {

   const { favorite, addFavorite } = useFavoriteContext()
   const isFavorite = favorite.some((fav) => fav.id === id)
   const icon = isFavorite ? favoriteIconFilled : favoriteIcon

   return (
      <div className={styles.container}>

         <img 
               src={coverImage} 
               alt={title} 
               className={styles.coverImage}
         />

         <h2>{title}</h2>

         <img 
               src={icon} 
               alt="Icone de Favoritar" 
               className={styles.favorite}
               onClick={() => {
                  addFavorite({ id, title, coverImage })
               }}
         />

      </div>
   )
}


export default Card
