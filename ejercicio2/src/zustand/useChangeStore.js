import { create } from 'zustand'

export const useChangeStore = create((set) => ({
    flag: false,
    triggerChange: (state) => set({state})
}))