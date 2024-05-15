import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import AsyncStorage from "@react-native-async-storage/async-storage"

export const useUserStore = create(
    persist(
        (set) => ({
            data: null,

            save: (data) => set({ data })
    }),
    {
        name: 'troca-paginas:data',
        storage: createJSONStorage(() => AsyncStorage)
    }
))