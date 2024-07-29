import { useFetch } from "./../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useFavoritesStore } from "../../zustand/useFavoritesStore";
import { notify } from "../../utils/functions";

export default function MeetupItem({item}) {

  const { count, changeFavoritesCount } = useFavoritesStore()

  const handleAddToFavorites = () => {
    if(localStorage.getItem(`meetup-fav-${item.id}`)) {
      notify(2,"Still in favorites")
    } else {
      localStorage.setItem(`meetup-fav-${item.id}`,"favorite")
      notify(1,"Meetup added to favorites")
      changeFavoritesCount(count + 1)
    }
  }

  return (
    <li className={classes.item} data-test='meet-up-item'>
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleAddToFavorites}>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
