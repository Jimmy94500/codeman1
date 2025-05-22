import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import Router from "./Router.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
