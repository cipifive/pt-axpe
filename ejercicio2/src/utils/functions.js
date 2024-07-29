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