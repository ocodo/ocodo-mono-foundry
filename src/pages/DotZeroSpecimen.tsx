import BlueprintAtmostphere from "@/components/BlueprintAtmostphere";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecimenSection from "@/components/SpecimenSection";
import WeightSample from "@/components/WeightSample";
import GlyphSampler from "@/components/GlyphSampler";

export default function DotZeroSpecimen() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#211d19] text-[#e3d8c8]">
      <BlueprintAtmostphere />

      <Header />

      <main className="relative z-10">
        {/* HERO */}
        <section className="mx-auto max-w-[1600px] border-x border-b border-[#51473c] px-5 sm:px-8 lg:px-12">
          <div className="fine-grid relative min-h-[calc(100vh-4rem)] overflow-hidden border-x border-[#51473c]">
            <span className="corner-tl" />
            <span className="corner-tr" />
            <span className="corner-bl" />
            <span className="corner-br" />

            <div className="absolute left-4 top-5 text-[8px] text-[#a99a87]">
              X:002 / Y:001
            </div>

            <div className="absolute right-4 top-5 text-[8px] text-[#a99a87]">
              SPECIMEN / 1:1
            </div>

            <div className="absolute bottom-5 left-4 text-[8px] text-[#a99a87]">
              VARIANTS / BASE &amp; NERD
            </div>

            <div className="absolute bottom-5 right-4 text-[8px] text-[#a99a87]">
              PKG / @OCODO/OCODO-MONO-DOTZERO
            </div>

            <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 py-24 sm:px-12 lg:px-20">
              <div className="mb-12 flex flex-wrap items-center gap-4 text-[10px] text-[#b99570]">
                <span>TYPE SPECIMEN</span>
                <span className="h-px w-16 bg-[#b99570]" />
                <span>OCODO MONO DOTZERO &amp; NERD</span>
              </div>

              <h1 className="font-dotzero max-w-[1400px] text-[clamp(4rem,3.5vw,10rem)] font-thin leading-[0.72]">
                OCODO-MONO-DOTZERO
              </h1>

              <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_320px]">
                <div>
                  <div className="dimension mb-3" />

                  <div className="flex justify-between text-[8px] text-[#a99a87]">
                    <span>002</span>
                    <span>OCODO TYPE / SPECIMEN 02</span>
                  </div>
                </div>

                <div className="text-xs leading-6 text-[#a99a87]">
                  Specialized DotZero monospaced type family featuring
                  explicit zero-character treatment, paired with Nerd Font
                  extension options.
                  <br />
                  <br />
                  Designed for high-density code reading, numerical clarity,
                  shell prompts, and technical terminals.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <SpecimenSection
          index="01 / PACKAGES"
          title="FAMILY VARIANTS"
          fontClass="font-dotzero"
        >
          <div className="grid gap-px border border-[#51473c] bg-[#51473c] lg:grid-cols-2">
            <article className="relative overflow-hidden bg-[#211d19] p-6 sm:p-10 lg:p-12">
              <span className="corner-tl" />

              <div className="mb-8 flex items-center justify-between text-[9px]">
                <span className="text-[#b99570]">
                  PACKAGE / 01
                </span>

                <span className="text-[#a99a87]">
                  NPM: @ocodo/ocodo-mono-dotzero
                </span>
              </div>

              <h3 className="font-dotzero mb-6 text-3xl font-light">
                ocodo-mono-dotzero
              </h3>

              <p className="mb-8 text-xs leading-6 text-[#a99a87]">
                The DotZero-enhanced typeface family. Distinctive
                zero-character design paired with crisp monospaced proportions
                for pristine code execution and UI data output.
              </p>

              <div className="font-dotzero border-t border-[#51473c] pt-6 text-xl font-thin leading-relaxed">
                const val = 0x0000; // ocodo-mono-dotzero
              </div>
            </article>

            <article className="relative overflow-hidden bg-[#211d19] p-6 sm:p-10 lg:p-12">
              <span className="corner-tr" />

              <div className="mb-8 flex items-center justify-between text-[9px]">
                <span className="text-[#b99570]">
                  PACKAGE / 02
                </span>

                <span className="text-[#a99a87]">
                  NPM: @ocodo/ocodo-mono-dotzero-nerd
                </span>
              </div>

              <h3 className="font-dotzero mb-6 text-3xl font-light">
                ocodo-mono-dotzero-nerd
              </h3>

              <p className="mb-8 text-xs leading-6 text-[#a99a87]">
                DotZero family variant fully patched with standard Nerd Font
                glyph ranges for terminal setups, file managers, and status
                indicators.
              </p>

              <div className="font-dotzero border-t border-[#51473c] pt-6 text-xl font-thin leading-relaxed">
                󰅩 const val = 0x0000; // ocodo-mono-dotzero-nerd 
              </div>
            </article>
          </div>
        </SpecimenSection>

        {/* WEIGHTS */}
        <SpecimenSection
          index="02 / WEIGHTS"
          title="LIGHT & THIN"
          fontClass="font-dotzero"
        >
          <div className="space-y-12">
            <WeightSample
              fontClass="font-dotzero"
              weight={300}
              label="OCODO MONO DOTZERO LIGHT"
            />

            <WeightSample
              fontClass="font-dotzero"
              weight={100}
              label="OCODO MONO DOTZERO THIN"
            />
          </div>
        </SpecimenSection>

        {/* NERD GLYPHS */}
        <SpecimenSection
          index="03 / NERD VARIANT"
          title="GLYPH EXTENSIONS"
          fontClass="font-dotzero"
        >
          <GlyphSampler fontClass="font-dotzero" />
        </SpecimenSection>

        <Footer />
      </main>
    </div>
  );
}
