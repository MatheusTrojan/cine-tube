import styles from "./InitialPage.module.css"
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import videos from "json/db.json"

function InitialPage() {
   return (
      <>
         <Header />
         <Banner image="home"/>
         <Title>
            <h1>Assista aqui os novos trailers de seus filmes favoritos!</h1>
         </Title>

         <section className={styles.container}>
            {videos.map((video) => {
               return <Card {...video} key={video.id}/>
            })}
         </section>

         <Footer />
      </>
   )
}

export default InitialPage;