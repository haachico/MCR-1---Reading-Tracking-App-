import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BooksContext, BooksContextProvider } from "./useContext/BooksContext";

import App from "./App";

export { BooksContext };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BooksContextProvider>
        <App />
      </BooksContextProvider>
    </BrowserRouter>
  </StrictMode>
);
