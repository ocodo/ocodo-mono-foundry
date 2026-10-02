import { FamilyCard } from "@/components/FamilyCard";


export interface FontFamily {
  id: string;
  number: string;
  name: string;
  title: string;
  description: string;
  specimen: string;
  npm: string;
  github: string;
  cdn: string;
  fontClass: "mono" | "dotzero";
}

const families: FontFamily[] = [
  {
    id: "mono",
    number: "01",
    name: "MONO",
    title: "OCODO MONO",
    description:
      "A monospaced coding typeface built for terminals, editors, interfaces and technical systems.",
    specimen: "/specimen-mono",
    npm: "@ocodo/ocodo-mono-nerd",
    github: "https://github.com/ocodo/ocodo-mono/releases",
    cdn: "https://cdn.jsdelivr.net/npm/@ocodo/ocodo-mono-nerd/",
    fontClass: "mono",
  },
  {
    id: "dotzero",
    number: "02",
    name: "DOTZERO",
    title: "OCODO MONO DOTZERO",
    description:
      "A monospaced coding typeface with a distinctive DotZero character treatment.",
    specimen: "/specimen-mono-dotzero",
    npm: "@ocodo/ocodo-mono-dotzero-nerd",
    github: "https://github.com/ocodo/ocodo-mono-dotzero/releases",
    cdn: "https://cdn.jsdelivr.net/npm/@ocodo/ocodo-mono-dotzero-nerd@1.0.0/",
    fontClass: "dotzero",
  },
];

export const Collection = () => {
  return (
    <section className="mx-auto max-w-[1600px] border-x border-b border-[#51473c] px-5 py-10 sm:px-8 lg:px-12">
      <div className="mb-4 text-[20px] text-[#b99570]">
        01 / COLLECTION
      </div>
      <div className="grid gap-px border border-[#51473c] bg-[#51473c] lg:grid-cols-2">
        {families.map((family) => (
          <FamilyCard key={family.id} family={family} />
        ))}
      </div>
    </section>
  );
}
