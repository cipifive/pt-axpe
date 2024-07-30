import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useFavoritesStore } from "../../zustand/useFavoritesStore";
import { handleRemoveFromFavorites } from "../../utils/functions";
import { handleAddToFavorites } from "../../utils/functions";

export default function MeetupItem({item,fav}) {

  const { count, changeFavoritesCount } = useFavoritesStore()

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
          {
            fav?
            <button onClick={() => handleRemoveFromFavorites(changeFavoritesCount,item,count)}>Remove from favorites</button>
            :
            <button onClick={() => handleAddToFavorites(changeFavoritesCount,item,count)}>Add to favorites</button>
          }
        </div>
      </Card>
    </li>
  );
}
