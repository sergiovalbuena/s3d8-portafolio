import Hero from "../components/Hero";
import BouncyCardsFeatures from "../components/BouncyCardsFeatures";
import ContactForm from "../components/ContactForm";
import DoubleScrollingLogos from "../components/DoubleScrollingLogos";
import CollapseCard from "../components/CollapseCards";
import GenerativeArt from "../components/GenerativeArt";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="projects">
        <BouncyCardsFeatures />
      </div>
      <DoubleScrollingLogos />
      <div id="code">
        <CollapseCard />
      </div>
      <div id="creative-coding">
        <GenerativeArt />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
