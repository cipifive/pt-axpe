import { useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useFavoritesStore } from "../../zustand/useFavoritesStore";

export default function MainNavigation({ isVisible }) {

  const navigate = useNavigate()

  const { count } = useFavoritesStore()

  return (
    <header className={`${classes.header} ${!isVisible? classes.hidden : ""}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a onClick={() => navigate("/")} >
              All Meetups
            </a>
          </li>

          <li>
            <a onClick={() => navigate("/add")}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a onClick={() => navigate("/favorites")}>
              My Favorites
              <span className={classes.badge}>{count}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
