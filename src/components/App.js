import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="*" element={<Layout />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
