import { BlueprintAtmosphere } from "@/components/BlueprintAtmostphere";
import { Collection } from "@/components/Collection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export function Index() {
  const props = {
    npmLinks: ["https://npmjs.com/org/ocodo"],
    githubLinks: [
      "https://github.com/ocodo/ocodo-mono",
      "https://github.com/ocodo/ocodo-mono-dotzero",
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#211d19] text-[#e3d8c8]">
      <BlueprintAtmosphere />
      <Header {...props} />
      <main className="relative z-10">
        <Hero />
        <Collection />
        <Footer />
      </main>
    </div>
  );
}
