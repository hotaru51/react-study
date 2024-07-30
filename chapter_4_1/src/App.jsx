import { useState } from "react";
import { useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log('レンダリング')
  const [num, setNum] = useState(0);
  useEffect(() => alert(), [num])

  const onClickButton = () => {
    // state設定用関数には前の値が引数として渡される
    setNum(prev => prev + 1);
  };

  return (
    <>
      <h1 style={{color: "red"}}>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};
