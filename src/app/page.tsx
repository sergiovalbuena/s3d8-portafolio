import Hero from "../components/Hero";
import BouncyCardsFeatures from "../components/BouncyCardsFeatures";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import DoubleScrollingLogos from "../components/DoubleScrollingLogos";

export default function Home() {
  return (
    <main className="">
      Hello
      <Hero />
      <BouncyCardsFeatures />
      <DoubleScrollingLogos />
      <Modal />
      <ContactForm />
    </main>
  );
}
