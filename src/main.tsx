import { createRoot } from "react-dom/client";
import Providers from "./providers.tsx";
import Main from "./pages/main/main.tsx";
import "./services/i18n/i18n";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Providers>
    <Main />
  </Providers>
);
