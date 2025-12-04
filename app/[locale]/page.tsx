import Header from "@/components/Header";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Reviews from "../../components/Reviews";
import Locations from "../../components/Locations";
import Contact from "../../components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Services />
            <Reviews />
            <Locations />
            <Contact />
            <Footer />
        </main>
    );
}
