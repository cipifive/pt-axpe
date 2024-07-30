import { NotificationManager } from "react-notifications";

export const countMeetupFavs = () => {
    let count = 0;

    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if(key.startsWith('meetup-fav-')) {
            count ++;
        }
    }
    return count;
}

export const notify = (status,message) => {
    switch(status) {
        case 1:
            NotificationManager.success(message,'SUCCESS',1500);
            break;
        case 2:
            NotificationManager.info(message,'INFO',1500);
            break;
        case 3:
            NotificationManager.error(message,'ERROR',1500);
            break;
    }
}

export const handleAddToFavorites = (callBack,item,count) => {
    if(localStorage.getItem(`meetup-fav-${item.id}`)) {
      notify(2,"Still in favorites")
    } else {
      localStorage.setItem(`meetup-fav-${item.id}`,"favorite")
      notify(1,"Meetup added to favorites")
      callBack(count + 1)
    }
  }

export const handleRemoveFromFavorites = (callBack,item,count) => {
    if(localStorage.getItem(`meetup-fav-${item.id}`)) {
        callBack(count - 1)
        localStorage.removeItem(`meetup-fav-${item.id}`)
        notify(1,"Meetup removed from favorites")
    } else {
      notify(3,"Meetup not found")
    }
  }

