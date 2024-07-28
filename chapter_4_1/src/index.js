// import ReactDOM from "react-dom"; <- 非推奨になった
import { createRoot } from "react-dom/client";
import { App } from "./App";

// 第1引数がrender対象、第2引数がrender先
// 第1引数の <App /> は上記のメソッド名に対応
// ReactDOM.render(<App />, document.getElementById('root')); <- 非推奨

const r = document.getElementById('root');
const root = createRoot(r);
root.render(<App />);
