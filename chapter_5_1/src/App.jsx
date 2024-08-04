import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export const App = () => {
  return (
    <>
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </>
  );
};
