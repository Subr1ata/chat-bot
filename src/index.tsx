import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  // RouterProvider,
  // createBrowserRouter,
} from "react-router-dom";
// import ChatBot from "./pages/chatbot";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ChatBot />,
//     errorElement: (
//       <>Not Found Sorry we are trying hard to resolve this issue !!</>
//     ),
//   },
// ]);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <RouterProvider router={router} /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
