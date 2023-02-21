import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";

function InitialPage() {
   return (
      <>
         <Header />
         <Banner image="home"/>
         <Title>
            <h1>Assista aqui os novos trailers de seus filmes favoritos!</h1>
         </Title>
         <Footer />
      </>
   )
}

export default InitialPage;