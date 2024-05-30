import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "./App.css";
import Footer from "./views/footer/Footer";
import Header from "./views/header/Header";
import Router from "./router/Router";

export default function App() {
  return (
    <PrimeReactProvider>
      <Header />
      <Router />
      <Footer />
    </PrimeReactProvider>
  );
}
