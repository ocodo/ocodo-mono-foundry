import type { ReactNode } from "react";

interface SpecimenSectionProps {
  index: string;
  title: string;  
  fontClass: "font-mono" | "font-dotzero"; 
  children: ReactNode;
}

export default function SpecimenSection({
  index,
  title,
  fontClass,
  children,
}: SpecimenSectionProps) {
  return (
    <section className="mx-auto max-w-[1600px] border-x border-b border-[#51473c] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mb-16">
        <div className="mb-4 text-[10px] text-[#b99570]">
          {index}
        </div>

        <h2 className={`${fontClass} text-4xl font-thin sm:text-6xl`}>
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}
