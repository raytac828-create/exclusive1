import "./index.css";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import routers from "./router/index.jsx";
import Loader from "./components/Loader.jsx";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // ilk açılışda da loader görünsün

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2 saniyə daha yumşaq görünür

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading ? (
        <Loader /> // Yalnız loader görünür
      ) : (
        <>
          <Header />
          <Routes>
            {routers.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
