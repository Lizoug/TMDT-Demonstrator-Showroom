import {BrowserRouter, Routes, Route} from "react-router-dom";
import Size_home from "./pages/home_main";
import ImpressumOSFA from "./pages/impressum_osfa";
import PrivacyPolicyOSFA from "./pages/privacy_policy_osfa";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Size_home/>} />
                <Route path="/Impressum" element={<ImpressumOSFA/>} />
                <Route path="/datenschutz" element={<PrivacyPolicyOSFA/>} />
            </Routes>
        </BrowserRouter>
    );
}
