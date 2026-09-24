import BlueprintAtmostphere from "@/components/BlueprintAtmostphere";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#211d19] text-[#e3d8c8]">
      <BlueprintAtmostphere />

      <Header />

      <main className="relative z-10">
        <Hero />
        <Collection />
        <Footer />
      </main>
    </div>
  );
}
