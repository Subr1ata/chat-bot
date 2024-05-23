import { Route, Routes } from "react-router-dom";
import ChatBot from "./pages/chatbot";

function App() {
  return (
    <Routes>
      <Route path="/" Component={ChatBot} />
    </Routes>
  );
}

export default App;
