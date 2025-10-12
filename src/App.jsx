import "./index.css"
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import routers from "./router/index.js"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {routers.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
