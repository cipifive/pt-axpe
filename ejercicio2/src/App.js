import { useEffect, useState } from "react";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";

function App() {

  const [isVisible, setIsVisible] = useState(true)

  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {

    const currentScrollY = window.scrollY;
    
    if(currentScrollY > lastScrollY) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout isVisible={isVisible}>
          <AllMeetupsPage />
        </Layout>
      ),
    },
    {
      path: "/add",
      element: (
        <Layout isVisible={isVisible}>
          <NewMeetupsPage />
        </Layout>
      ),
    },
    {
      path: "/favorites",
      element: (
        <Layout isVisible={isVisible}>
          <FavoritesPage />
        </Layout>
      ),
    }
  ])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[lastScrollY])

  return (
    <div data-test="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
