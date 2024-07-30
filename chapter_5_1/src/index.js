import { createRoot } from "react-dom/client"
import { App } from "./App";

const r = document.getElementById('root');
const root = createRoot(r);
root.render(<App />);
