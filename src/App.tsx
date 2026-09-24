import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import MonoSpecimen from "@/pages/MonoSpecimen";
import DotZeroSpecimen from "@/pages/DotZeroSpecimen";

const basename = window.location.pathname.split("/").filter(Boolean)[0]
  ? `/${window.location.pathname.split("/").filter(Boolean)[0]}`
  : "/";

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/specimen-mono"
          element={<MonoSpecimen />}
        />
        <Route
          path="/specimen-mono-dotzero"
          element={<DotZeroSpecimen />}
        />
      </Routes>
    </BrowserRouter>
  );
}
