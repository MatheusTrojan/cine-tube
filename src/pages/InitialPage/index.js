import styles from "./InitialPage.module.css"
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";
import { useEffect, useState } from "react";

function InitialPage() {

   const [videos, setVideos] = useState([]);

   useEffect(() => {
      fetch("https://my-json-server.typicode.com/MatheusTrojan/cine-tube-api/videos")
         .then(response => response.json())
         .then(data => {
            setVideos(data)
         })
   }, [])

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