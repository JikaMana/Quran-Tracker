import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import { ROUTES } from "./routes";
import QuranTracker from "./pages/QuranTracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.QURAN_TRACKER} element={<QuranTracker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
