import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlueprintAtmostphere from "@/components/BlueprintAtmostphere";
import TeleportToTop from "@/components/TeleportToTop";
import Index from "@/pages/Index";
import DotZeroSpecimen from "@/pages/DotZeroSpecimen";
import MonoSpecimen from "@/pages/MonoSpecimen";

export default function App() {
  return (
    <BrowserRouter>
      <TeleportToTop />

      <Routes>
        <Route
	  path="/"
	  element={<Index />} />
        <Route
	  path="/specimen-mono"
	  element={<MonoSpecimen />} />
        <Route
          path="/specimen-mono-dotzero"
          element={<DotZeroSpecimen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
