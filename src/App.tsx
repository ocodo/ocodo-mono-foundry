import { HashRouter, Route, Routes } from "react-router-dom";
import { TeleportToTop } from "@/components/TeleportToTop";
import { DotZeroSpecimen } from "@/pages/DotZeroSpecimen";
import { Index } from "@/pages/Index";
import { MonoSpecimen } from "@/pages/MonoSpecimen";

export default function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}
