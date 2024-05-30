import { Route, Routes } from "react-router-dom";
import Home from "../views/home/Home";
import NotFound from "../views/not-found/NotFound";
import LegalMentionsEn from "../views/legal-mentions/LegalMentions.en";
import LegalMentionsFr from "../views/legal-mentions/LegalMentions.fr";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/legal-mentions/en" element={<LegalMentionsEn />} />
            <Route path="/legal-mentions/fr" element={<LegalMentionsFr />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}