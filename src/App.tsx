import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/signin";
// import ChatBot from "./pages/chatbot";

function App() {
  return (
    <Routes>
      {/* <Route path="/" Component={ChatBot} /> */}
      <Route path="/" Component={SignIn} />
    </Routes>
  );
}

export default App;
