import Favorites from "pages/Favorites";
import InitialPage from "pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Player from "pages/Player";
import NotFound from "pages/NotFound";
import BasePage from "pages/BasePage";


function AppRoutes() {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<BasePage />}>
                            <Route index element={<InitialPage />} />
                            <Route path="favoritos" element={<Favorites />} />
                            <Route path=":id" element={<Player />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;