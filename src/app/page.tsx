import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RulesHighlight from "@/components/RulesHighlight";
import RegisterPromo from "@/components/RegisterPromo";
import PeopleCollage from "@/components/PeopleCollage";
import PlanOffers from "@/components/PlanOffers";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="header-hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <main>
        <RulesHighlight />
        <RegisterPromo />
        <PeopleCollage />
        <PlanOffers />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
