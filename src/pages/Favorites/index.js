import Banner from "components/Banner";
import Title from "components/Title";
import styles from "./Favorites.module.css"
import videos from "json/db.json"
import Card from "components/Card";

function Favorites() {
    return (
        <>
            <Banner image="favorites"/>
            <Title>
                Esses são os seus trailers favoritados!
            </Title>

            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;
