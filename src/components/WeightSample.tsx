interface WeightSampleProps {
  weight: 100 | 300;
  label: string;
}

export default function WeightSample({
  weight,
  label,
}: WeightSampleProps) {
  return (
    <div className="border border-[#51473c] bg-[#27221d] p-6 sm:p-10">
      <div className="mb-6 flex items-center justify-between border-b border-[#51473c] pb-4 text-[9px] text-[#a99a87]">
        <span className="text-[#b99570]">
          WEIGHT / {weight}
        </span>

        <span>{label}</span>
      </div>

      <div
        className={`font-dotzero text-[clamp(1.5rem,3vw,3.5rem)] leading-tight ${
          weight === 300 ? "font-light" : "font-thin"
        }`}
      >
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
        <br />
        abcdefghijklmnopqrstuvwxyz
        <br />
        0123456789 !@#$%^&amp;*()_+-=[]&#123;&#125;|;:&apos;,.&lt;&gt;/?
      </div>
    </div>
  );
}
