import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        {/* route layout is the parent for others and the contains navbar and footer nad also dynamic children. other routes are its dynamic children that are nested */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />   {/* Here when we are in layout path the main page is home (as an index) */}
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
