import { Link } from "react-router-dom";
import type { FontFamily } from "@/components/Collection";

interface FamilyCardProps {
  family: FontFamily;
}

export default function FamilyCard({ family }: FamilyCardProps) {
  const {
    number,
    name,
    title,
    description,
    specimen,
    npm,
    github,
    cdn,
    fontClass,
  } = family;

  return (
    <article className="group relative overflow-hidden bg-[#211d19] transition-colors duration-300 hover:bg-[#27221d]">
      <span className="corner-tl" />
      <span className="corner-br" />

      <div className="p-6 sm:p-10 lg:p-12">
        <div className="mb-16 flex items-center justify-between text-[9px]">
          <span className="text-[#b99570]">
            FAMILY / {number}
          </span>

          <span className="text-[#a99a87]">
            MONOSPACED
          </span>
        </div>

        <div
          className={`${fontClass} mb-16 text-[clamp(4rem,9vw,9rem)] font-thin leading-[0.78]`}
        >
          {name}
        </div>

        <div className="mb-12">
          <div className="mb-4 text-[10px] text-[#b99570]">
            {title}
          </div>

          <p className="max-w-lg text-xs leading-6 text-[#a99a87]">
            {description}
          </p>
        </div>

        <div
          className={`${fontClass} mb-10 border-y border-[#51473c] py-7 text-[clamp(2rem,1vw,4rem)] font-light leading-[1.1]`}
        >
          ABCDEFGHIJKLMNOPQRSTUVWXYZ
          <br />
          0123456789
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 text-[8px] text-[#a99a87]">
          <div>
            <div className="mb-2 text-[#b99570]">
              WEIGHTS
            </div>
            LIGHT / THIN
          </div>

          <div>
            <div className="mb-2 text-[#b99570]">
              USE
            </div>
            CODE / UI / DATA
          </div>
        </div>

        <Link
          to={specimen}
          className="inline-flex items-center gap-5 border border-[#51473c] px-6 py-4 text-[9px] text-[#b99570] transition duration-300 hover:border-[#b99570] hover:bg-[#b99570] hover:text-[#211d19]"
        >
          OPEN SPECIMEN
          <span>→</span>
        </Link>

        <div className="mt-12 border-t border-[#51473c] pt-8">
          <div className="mb-5 flex items-center justify-between text-[9px]">
            <span className="text-[#b99570]">
              ACQUIRE
            </span>

            <span className="text-[#a99a87]">
              NPM / GITHUB / CDN
            </span>
          </div>

          <div className="grid gap-px border border-[#51473c] bg-[#51473c] text-[9px]">
            <a
              href={`https://www.npmjs.com/package/${npm}`}
              className="flex items-center justify-between gap-4 bg-[#211d19] px-4 py-3 text-[#a99a87] transition-colors duration-300 hover:bg-[#27221d] hover:text-[#e3d8c8]"
            >
              <span className="text-[#b99570]">NPM</span>
              <span className="mono truncate">{npm}</span>
              <span>→</span>
            </a>

            <a
              href={github}
              className="flex items-center justify-between gap-4 bg-[#211d19] px-4 py-3 text-[#a99a87] transition-colors duration-300 hover:bg-[#27221d] hover:text-[#e3d8c8]"
            >
              <span className="text-[#b99570]">GITHUB</span>
              <span className="mono truncate">
                {github.replace("https://github.com/", "")}
              </span>
              <span>→</span>
            </a>

            <a
              href={cdn}
              className="flex items-center justify-between gap-4 bg-[#211d19] px-4 py-3 text-[#a99a87] transition-colors duration-300 hover:bg-[#27221d] hover:text-[#e3d8c8]"
            >
              <span className="text-[#b99570]">CDN</span>
              <span className="mono truncate">
                {cdn.replace("https://", "")}
              </span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
