import { createRoot } from "react-dom/client"
import { CssModule } from "./CssModule"

const r = document.getElementById('root');
const root = createRoot(r);
root.render(<CssModule />);
