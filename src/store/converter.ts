import { FormDataType } from '@/types/FormDataType';
import create, { createStore } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type historyStoreType = {
  history: FormDataType[];
  setHistory: (historyItem: FormDataType) => void;
  clearHistory: () => void;
};

const useConversionStore = create(
  persist<historyStoreType>(
    (set) => ({
      history: [],
      setHistory: (historyItem: FormDataType) =>
        set((state) => {
          const newHistory = [...state.history, historyItem];
          newHistory.length > 10 && newHistory.shift();

          return { history: newHistory };
        }),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'history',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useConversionStore;
