import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Steps } from "./sections/Steps";
import { Scale } from "./sections/Scale";
import { Engine } from "./sections/Engine";
import { Product } from "./sections/Product";
import { Regulatory } from "./sections/Regulatory";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Steps />
        <Scale />
        <Engine />
        <Product />
        <Regulatory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
