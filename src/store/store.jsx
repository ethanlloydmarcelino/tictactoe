import { create } from 'zustand'

const useStore = create((set) => ({
  //theme mode
  isDark: true,
  setIsDark: (value) => set({isDark: value}),

  //SquareBoard
  data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  setData: (value) => set({ data: value }),
  nextIcon: 1,
  setNextIcon: (value) => set({ nextIcon: value }),
  winner: 0,
  setWinner: (value) => set({ winner: value }),
}))

export default useStore;