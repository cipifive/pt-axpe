import { useFavoritesStore } from "../../zustand/useFavoritesStore";
import classes from "./Card.module.css";
import { notify } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function CardFav({ item }) {
    
    const {count, changeFavoritesCount} = useFavoritesStore()

    const navigate = useNavigate()

    const handleRemoveFromFavorites = () => {
        if(localStorage.getItem(`meetup-fav-${item.id}`)) {
            changeFavoritesCount(count - 1)
            localStorage.removeItem(`meetup-fav-${item.id}`)
            notify(1,"Meetup removed from favorites")
            navigate("/")
        } else {
          localStorage.setItem(`meetup-fav-${item.id}`,"favorite")
          notify(3,"Meetup not found")
          
        }
      }

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
            <button onClick={handleRemoveFromFavorites}>Remove from favorites</button>
            </div>
        </Card>
      )


}
