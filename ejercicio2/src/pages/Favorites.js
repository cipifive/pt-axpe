import { useFetch } from "../util-hooks/useFetch";
import classes from "./../components/meetups/MeetupList.module.css";
import CardFav from "../components/ui/CardFav";

export default function FavoritesPage() {

  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>My Favorites</h1>
      <ul className={classes.list}>
        {
          data.map(item => {
            if(localStorage.getItem(`meetup-fav-${item.id}`)) {
              return <CardFav key={item.id} item={item} />
            }
          })
        }
      </ul>
    </section>
  );
}
