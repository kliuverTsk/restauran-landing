import Header from "./components/Header";
import Hero from "./components/Hero";
import PratosPopulares from "./components/PratosPopulares";
import PratosDestaque from "./components/PratosDestaque";
import EquipeChef from "./components/equipeChef";
import Localizacao from "./components/localizacion";
import Footer from "./components/footer";

export default function Home() {
  return (<>
    <main>
      <Header />
      <Hero />
      <PratosPopulares />
      <PratosDestaque />
      <EquipeChef />
      <Localizacao />
      <Footer />
    </main>
    </>);
}
