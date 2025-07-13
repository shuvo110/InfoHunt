import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./components/routes/Routes";
import Custom from "./custom/Custom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Custom>
      <RouterProvider router={router}></RouterProvider>
    </Custom>
  </StrictMode>
);
