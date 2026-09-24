export default function Hero() {
  return (
    <section className="mx-auto max-w-[1600px] border-x border-b border-[#51473c] px-5 sm:px-8 lg:px-12">
      <div className="fine-grid relative min-h-[calc(100vh-4rem)] overflow-hidden border-x border-[#51473c]">
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />

        <div className="absolute left-4 top-5 text-[8px] text-[#a99a87]">
          X:000 / Y:000
        </div>

        <div className="absolute right-4 top-5 text-[8px] text-[#a99a87]">
          SCALE / 1:1
        </div>

        <div className="absolute bottom-5 left-4 text-[8px] text-[#a99a87]">
          TYPE / SYSTEM
        </div>

        <div className="absolute bottom-5 right-4 text-[8px] text-[#a99a87]">
          02 FAMILIES
        </div>

        <div className="flex min-h-[calc(100vh-4rem)] flex-col justify-center px-6 py-24 sm:px-12 lg:px-20">
          <div className="mb-12 flex flex-wrap items-center gap-4 text-[10px] text-[#b99570]">
            <span>OCODO</span>
            <span className="h-px w-16 bg-[#b99570]" />
            <span>TYPE FOUNDRY</span>
          </div>

          <h1 className="dotzero max-w-1400px text-[clamp(4.5rem,4vw,12rem)] font-thin leading-[0.72]">
            OCODO MONO FONTS
          </h1>

          <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <div className="dimension mb-3" />

              <div className="flex justify-between text-[8px] text-[#a99a87]">
                <span>000</span>
                <span>OCODO TYPE / 002</span>
              </div>
            </div>

            <div className="text-xs leading-6 text-[#a99a87]">
              Two monospaced type families.
              <br />
              <br />
              Designed for code, systems, interfaces,
              terminals and technical environments.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
