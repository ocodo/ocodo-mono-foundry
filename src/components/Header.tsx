import { Github, Npm } from "pixelarticons/react";
import { useState, type FC } from "react";

interface HeaderProps {
  npmLinks?: string[];
  githubLinks?: string[];
}

export const Header: FC<HeaderProps> = ({
  npmLinks = [],
  githubLinks = [],
}) => {

  const [currentLinkText, setCurrentLinkText] = useState<string>('')

  const linkHover = (link:string) => {
    setCurrentLinkText(link.replace('https://',''))
  }

  return (
    <header className="relative z-10 border-b border-[#51473c]">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between border-x border-[#51473c] px-4">
          <div className="flex items-center gap-4">
            <div className="crosshair" />

            <div className="flex flex-row items-center gap-5 py-4">
              OCODO TYPE

              {npmLinks.map((link) => (
                <a
                  key={link}
                  className="dotzero text-sm"
                  href={link}
                  onMouseOver={() => linkHover(link)}
                  onMouseOut={() => linkHover('')}
                >
                  <Npm />
                </a>
              ))}

              {githubLinks.map((link) => (
                <a
                  key={link}
                  className="dotzero text-sm"
                  href={link}
                  onMouseOver={() => linkHover(link)}
                  onMouseOut={() => linkHover('')}
                >
                  <Github />
                </a>
              ))}

              {currentLinkText}
            </div>
          </div>

          <div className="flex items-center gap-5 text-[9px] text-[#a99a87]">
            <span>FOUNDRY / INDEX</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </header>
  );
};
