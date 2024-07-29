import { create } from 'zustand'
import { countMeetupFavs } from '../utils/functions'

export const useFavoritesStore = create((set) => ({
    count: countMeetupFavs(),
    changeFavoritesCount: (count) => set({count})
}))