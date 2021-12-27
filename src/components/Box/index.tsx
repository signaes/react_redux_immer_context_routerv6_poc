import { FC, useContext } from "react";
import { Themes, ThemeContext } from "../../App";

export const Box: FC = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const style =
    theme === Themes.Light
      ? { backgroundColor: "#fff", color: "#000" }
      : { backgroundColor: "#000", color: "#fff" };
  const switchTheme = () => {
    setTheme(theme === Themes.Light ? Themes.Dark : Themes.Light);
  };

  return (
    <div style={style}>
      {children}

      <div>
        <button onClick={switchTheme}>Switch</button>
      </div>
    </div>
  );
};
