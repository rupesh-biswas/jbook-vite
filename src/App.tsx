import { SpeedInsights } from "@vercel/speed-insights/react";
import CellList from "./components/cell-list";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <div>
      <CellList />
      <SpeedInsights />
    </div>
  );
}
