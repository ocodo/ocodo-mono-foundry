import OcodoLogo from "@/components/OcodoLogo";

export default function FontLoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#211d19] text-[#b99570]">
      <OcodoLogo className="h-auto w-[min(70vw,450px)]" />
    </div>
  );
}
