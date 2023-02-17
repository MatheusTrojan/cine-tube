import InitialPage from "pages/InitialPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;