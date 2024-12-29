import { create } from 'zustand'

const useStore = create((set) => ({
  isDark: true,
  setIsDark: (value) => set({isDark: value})
}))

export default useStore;