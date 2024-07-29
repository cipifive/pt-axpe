import { useFavoritesStore } from "../../zustand/useFavoritesStore";
import classes from "./Card.module.css";
import { notify } from "../../utils/functions";
import { useNavigate } from "react-router-dom";

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

    return <div className={classes.cardfav}>
        <div className={classes.cardfavhead}>
            <span>{item.title}</span>
            <img src={item.image} width={200} />
        </div>
        <div className={classes.actions}>
            <button onClick={handleRemoveFromFavorites}>Remove from favorites</button>
            </div>
        </div>;
}
