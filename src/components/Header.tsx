import { Github, Npm } from "pixelarticons/react";
import type { FC } from "react";

interface HeaderProps {
  npmLink: string;
  githubLink: string;
}

export const Header: FC<HeaderProps> = ({ npmLink, githubLink }) => {
  return (
    <header className="relative z-10 border-b border-[#51473c]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between border-x border-[#51473c] px-4">
          <div className="flex items-center gap-4">
            <div className="crosshair" />
            <div className="flex flex-row gap-5 items-center py-4">
              OCODO TYPE

              <a className="dotzero text-sm" href={npmLink}>
                <Npm />
              </a>
              <a className="dotzero text-sm" href={githubLink}>
                <Github />
              </a>
            </div>

          </div>

          <div className="flex items-center gap-5 text-[9px] text-[#a99a87]">
            <span>FOUNDRY / INDEX</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </header >
  );
}
