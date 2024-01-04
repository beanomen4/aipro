import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
