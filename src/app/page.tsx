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
      <div id="code">
        <CollapseCard />
      </div>
      <div id="ui-components">
        <Modal />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}
