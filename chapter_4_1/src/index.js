import ReactDOM from "react-dom";
import { Fragment } from "react";

const App = () => {
  // returnで返すエレメントは1つのタグに囲まれている必要がある
  // Fragmentはタグの代わりに使用でき、描画時にはDOMは生成されない
  return (
    <Fragment>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </Fragment>
  );
};

// 第1引数がrender対象、第2引数がrender先
// 第1引数の <App /> は上記のメソッド名に対応
ReactDOM.render(<App />, document.getElementById('root'));
