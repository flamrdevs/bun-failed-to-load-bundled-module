import { createRoot } from "react-dom/client";

import { Hello } from "./components";

createRoot(document.getElementById("root")!).render(
  <div>
    <Hello />
  </div>
);
