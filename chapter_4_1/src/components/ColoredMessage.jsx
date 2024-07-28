export const ColoredMessage = (props) => {
  console.log(props)
  const { color, fontSize, children } = props
  // CSSはJavaScriptのオブジェクトとなるので、"で囲んだり
  // - は外してキャメルケースにする必要がある(font-size -> fontSize)
  const contentStyle = {
    color,
    fontSize
  };

  return <p style={contentStyle}>{children}</p>;
};
