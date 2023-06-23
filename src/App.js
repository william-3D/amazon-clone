import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter> //store current location in browser address bar and allows navigation using built-in history stack
  );
};

export default App;
