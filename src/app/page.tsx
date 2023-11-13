import Hero from "../components/Hero";
import BouncyCardsFeatures from "../components/BouncyCardsFeatures";
import ContactForm from "../components/ContactForm";
import Modal from "../components/Modal";
import DoubleScrollingLogos from "../components/DoubleScrollingLogos";
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <BouncyCardsFeatures />
      <DoubleScrollingLogos />
      <Modal />
      <ContactForm />
    </main>
  );
}
