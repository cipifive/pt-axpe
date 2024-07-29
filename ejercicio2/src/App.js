import { useEffect, useState } from "react";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {

  const [isVisible, setIsVisible] = useState(true)

  const [lastScrollY, setLastScrollY] = useState(0)

  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  const handleScroll = () => {

    const currentScrollY = window.scrollY;
    
    if(currentScrollY > lastScrollY) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }

    setLastScrollY(currentScrollY)
  }

  function getCurrentPageComponent() {
    let currentPageComponent = <AllMeetupsPage />;
    switch (page) {
      case FAVORITES_PAGE:
        currentPageComponent = <FavoritesPage />;
        break;
      case NEW_MEETUP_PAGE:
        currentPageComponent = <NewMeetupsPage />;
        break;
      default:
        currentPageComponent = <AllMeetupsPage />;
    }

    return currentPageComponent;
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  },[lastScrollY])

  return (
    <div data-test="app">
      <MainNavigation setPage={setPage} isVisible={isVisible} />
      <Layout>{getCurrentPageComponent()}</Layout>
    </div>
  );
}

export default App;
