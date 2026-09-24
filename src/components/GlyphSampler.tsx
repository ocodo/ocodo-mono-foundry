interface GlyphSamplerProps {
  fontClass: "font-mono" | "font-dotzero";
}

const glyphs = [
  ["󰅩", "U+F0169"],
  ["", "U+E795"],
  ["", "U+E5FF"],
  ["󰊤", "U+F02A4"],
  ["", "U+E73C"],
  ["", "U+E60C"],
  ["󰌠", "U+F0320"],
  ["󰙨", "U+F0668"],
  ["󰔁", "U+F0501"],
  ["", "U+E61E"],
  ["󰞋", "U+F078B"],
  ["󰅟", "U+F015F"],
] as const;

export default function GlyphSampler({
  fontClass,
}: GlyphSamplerProps) {
  return (
    <div className="border border-[#51473c] bg-[#27221d] p-8 sm:p-12">
      <div className="mb-8 text-[9px] text-[#b99570]">
        NERD FONT GLYPH SAMPLER
      </div>

      <div
        className={`${fontClass} grid grid-cols-2 gap-6 text-2xl text-[#e3d8c8] sm:grid-cols-4 md:grid-cols-6`}
      >
        {glyphs.map(([glyph, codepoint]) => (
          <div
            key={codepoint}
            className="border border-[#51473c] p-4 text-center"
          >
            {glyph}

            <span className="mt-2 block text-[8px] text-[#a99a87]">
              {codepoint}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
