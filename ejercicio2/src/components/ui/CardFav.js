import { useFavoritesStore } from "../../zustand/useFavoritesStore";
import classes from "./Card.module.css";
import Card from "./Card";
import { handleRemoveFromFavorites } from "../../utils/functions";

export default function CardFav({ item }) {
  
  const {count, changeFavoritesCount} = useFavoritesStore()
  
  return (
    <Card>
      <div className={classes.cardfav}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={classes.contentfav}>
        <h3>{item.title}</h3>
        <address>{item.address}</address>
        <p>{item.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={() => handleRemoveFromFavorites(changeFavoritesCount,item,count)}>Remove from favorites</button>
      </div>
    </Card>
  )
}
