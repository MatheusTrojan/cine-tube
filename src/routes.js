import Favorites from "pages/Favorites";
import InitialPage from "pages/InitialPage";
import Header from "components/Header";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";
import FavoritesProvider from "contexts/Favorites";
import Player from "pages/Player";
import NotFound from "pages/NotFound";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />

            <Container>
                <FavoritesProvider>

                    <Routes>
                        <Route path="/" element={<InitialPage />}></Route>
                        <Route path="/favoritos" element={<Favorites />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                    
                </FavoritesProvider>
            </Container>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;