import { enableMapSet } from "immer";
import { Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import { Box } from "./components/Box";
import { AddConfig } from "./components/AddConfig";
import { AddConfigOnRender } from "./components/AddConfigOnRender";
import { DisplayConfig } from "./components/DisplayConfig";
import { useImmer } from "use-immer";

enableMapSet();

export enum Themes {
  Light = "Light",
  Dark = "Dark",
}

export const ThemeContext = createContext({
  theme: Themes.Light,
  setTheme: (_: Themes) => {},
});

export const ConfigsContext = createContext({
  config: new Map(),
  update: (_: string, __: object | string | number | boolean) => {},
});

function App() {
  // const [count, setCount] = useState(0);
  const themeContext = useContext(ThemeContext);
  const [appTheme, setAppTheme] = useState(themeContext.theme);
  const appThemeContext = {
    ...themeContext,
    theme: appTheme,
    setTheme: (theme: Themes) => setAppTheme(theme),
  };
  const configsContext = useContext(ConfigsContext);
  const [config, setConfigs] = useImmer(configsContext.config);
  const updateConfigs = (
    key: string,
    value: object | string | number | boolean
  ) => {
    console.log("WIll set config", key, value);
    setConfigs((draft) => {
      draft.set(key, value);
    });
  };
  const appConfigsContext = { config, update: updateConfigs };

  console.log(config);

  return (
    <ConfigsContext.Provider value={appConfigsContext}>
      <ThemeContext.Provider value={appThemeContext}>
        <div className="App">
          {/* <header className="App-header"> */}
          {/*   <img src={logo} className="App-logo" alt="logo" /> */}
          {/*   <p>Hello Vite + React!</p> */}
          {/*   <Counter /> */}
          {/*   <p> */}
          {/*     <button */}
          {/*       type="button" */}
          {/*       onClick={() => setCount((count) => count + 1)} */}
          {/*     > */}
          {/*       count is: {count} */}
          {/*     </button> */}
          {/*   </p> */}
          {/*   <p> */}
          {/*     Edit <code>App.tsx</code> and save to test HMR updates. */}
          {/*   </p> */}
          {/*   <p> */}
          {/*     <a */}
          {/*       className="App-link" */}
          {/*       href="https://reactjs.org" */}
          {/*       target="_blank" */}
          {/*       rel="noopener noreferrer" */}
          {/*     > */}
          {/*       Learn React */}
          {/*     </a> */}
          {/*     {" | "} */}
          {/*     <a */}
          {/*       className="App-link" */}
          {/*       href="https://vitejs.dev/guide/features.html" */}
          {/*       target="_blank" */}
          {/*       rel="noopener noreferrer" */}
          {/*     > */}
          {/*       Vite Docs */}
          {/*     </a> */}
          {/*   </p> */}
          {/* </header> */}

          <Box>Testing context</Box>

          <AddConfig />
          <AddConfigOnRender k="xyz" v={2000} />
          <AddConfigOnRender k="xz" v={200} />

          <div>
            {Array.from(config.keys()).map((k, i) => (
              <DisplayConfig k={k} key={`${k}-${i}`} />
            ))}
          </div>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <AddConfigOnRender k="home" v="/">
                <h1>This is home</h1>
              </AddConfigOnRender>
            }
          />
          <Route
            path="about"
            element={
              <AddConfigOnRender k="about" v="sobre">
                <h1>What is this about?</h1>
              </AddConfigOnRender>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </ConfigsContext.Provider>
  );
}

export default App;
