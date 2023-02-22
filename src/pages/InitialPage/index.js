import styles from "./InitialPage.module.css"
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import videos from "json/db.json"

function InitialPage() {
   return (
      <>
         <Banner image="home"/>
         <Title>
            Assista aqui os novos trailers de seus filmes favoritos!
         </Title>

         <section className={styles.container}>
            {videos.map((video) => {
               return <Card {...video} key={video.id}/>
            })}
         </section>
      </>
   )
}

export default InitialPage;