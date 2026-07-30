import { Nav } from "./sections/Nav";
import { Hero } from "./sections/Hero";
import { Problem } from "./sections/Problem";
import { Steps } from "./sections/Steps";
import { Scale } from "./sections/Scale";
import { Engine } from "./sections/Engine";
import { Product } from "./sections/Product";
import { Partner } from "./sections/Partner";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

// NOTA INTERNA — sección "Regulatorio" desactivada a pedido.
// El componente sigue en src/sections/Regulatory.tsx y el texto en
// src/content.ts (`regulatory`). Para volver a publicarla:
//   1. importar y renderizar <Regulatory /> entre <Product /> y <Contact />
//   2. reponer { label: "Regulatorio", href: "#regulatorio" } en `nav.links`
//   3. revisar fechas y el estado de la consulta previa ANMAT antes de publicar
// import { Regulatory } from "./sections/Regulatory";

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
        <Partner />
        {/* <Regulatory /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
