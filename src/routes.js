import Favorites from "pages/Favorites";
import InitialPage from "pages/InitialPage";
import Header from "components/Header";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "components/Container";


function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />

            <Container>
                <Routes>
                    <Route path="/" element={<InitialPage />}></Route>
                    <Route path="/favoritos" element={<Favorites />}></Route>
                </Routes>
            </Container>

            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;