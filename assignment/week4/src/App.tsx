import { RouterProvider } from "react-router";
import router from "./router/Router";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./styles/Global";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
