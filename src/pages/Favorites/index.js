import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorites.module.css"
import Card from "components/Card";
import { useFavoriteContext } from "contexts/Favorites";

function Favorites() {

    const { favorite } = useFavoriteContext();

    return (
        <>
            <Banner image="favorites"/>
            <Title>
                Esses são os seus trailers favoritados!
            </Title>

            <section className={styles.container}>
                {favorite.map((fav) => {
                    return <Card {...fav} key={fav.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;
