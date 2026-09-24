export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1600px] border-x border-[#51473c] px-5 sm:px-8 lg:px-12">
      <div className="grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <div className="mb-3 text-[9px] text-[#b99570]">
            FOUNDRY
          </div>

          <div className="dotzero text-xs">
            <a href="https://www.npmjs.com/org/ocodo">
              OCODO TYPE
            </a>
          </div>
        </div>

        <div>
          <div className="mb-3 text-[9px] text-[#b99570]">
            FAMILIES
          </div>

          <div className="text-xs">
            MONO / DOTZERO
          </div>
        </div>

        <div>
          <div className="mb-3 text-[9px] text-[#b99570]">
            SYSTEM
          </div>

          <div className="text-xs">
            CODE / UI / ICONS
          </div>
        </div>
      </div>

      <div className="border-t border-[#51473c] py-5 text-[8px] text-[#a99a87]">
        <div className="flex flex-col justify-between gap-3 sm:flex-row">
          <span>
            OCODO TYPE SYSTEM / 2026
          </span>

          <span>
            END OF INDEX
          </span>
        </div>
      </div>
    </footer>
  );
}
