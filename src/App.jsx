import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/CartPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePAGE.JSX";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="cart" element={<Cart />} />
            <Route index element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
