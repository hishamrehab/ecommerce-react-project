import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Header from "./components/1-header/Header";
import Category from "./components/3-main/Category";
import Products from "./components/3-main/Products";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Success from "./pages/Success";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavbarComponent from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import StoreContext from "./components/3-main/StoreContext";
import { useEffect, useState } from "react";

function App() {
  const [filter, setFilter] = useState(
    "http://localhost:1337/api/products?populate=*"
  );

  
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          {/* <Header />  */}
          <Container>
            <NavbarComponent />
            <StoreContext.Provider value={{ filter, setFilter }}>
              <Products />
            </StoreContext.Provider>

            <Store />
            {/* <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} /> */}

            {/* <Category /> */}
          </Container>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
