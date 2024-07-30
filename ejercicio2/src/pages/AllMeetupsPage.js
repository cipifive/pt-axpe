import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";
import { useFetch } from "../util-hooks/useFetch";
import { useMemo } from "react";

export default function AllMeetupsPage() {

  const { data } = useFetch({
    url: "/data.json",
  });

  const meetupItems = useMemo(() => {
    return data?.map(item => (
      <MeetupItem
        key={item.title}
        item={item}
        fav={!!localStorage.getItem(`meetup-fav-${item.id}`)}
      />
    ));
  }, [data]);

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetupItems}
      </ul>
    </section>
  );
}
