import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./pages/Main";
import * as process from "process";

(window as any).global = window;
(window as any).process = process;
(window as any).Buffer = [];

// const root = ReactDOM.createRoot(document.getElementById("root")!);

// root.render(<App />);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/main",
    element: <Main />,
    errorElement: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
