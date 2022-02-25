import create from 'zustand'
import { persist } from 'zustand/middleware'

const store = set => ({
  darkMode: false,
  setTheme: boolean => set({ darkMode: boolean })
})

export const useStore = create(persist(store, { name: 'themeSettings' }))
