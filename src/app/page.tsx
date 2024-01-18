import Hero from "../components/Hero";
import BouncyCardsFeatures from "../components/BouncyCardsFeatures";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import DoubleScrollingLogos from "../components/DoubleScrollingLogos";
import CollapseCard from "../components/CollapseCards";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div id="projects">
        <BouncyCardsFeatures />
      </div>
      <DoubleScrollingLogos />
      <CollapseCard />
      <Modal />
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
