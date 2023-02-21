import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import Card from "components/Card";

function InitialPage() {
   return (
      <>
         <Header />
         <Banner image="home"/>
         <Title>
            <h1>Assista aqui os novos trailers de seus filmes favoritos!</h1>
         </Title>

         <Card id="1" title="teste" coverImage="https://i.ytimg.com/vi/a1w9x5U88jU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBH0ZkE9Az01m7D2Clso2EV9Xg2J" />

         <Footer />
      </>
   )
}

export default InitialPage;