import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { ServiceArea } from "@/components/service-area";
import { FAQ } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Problems />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
