import { create } from 'zustand'
interface StoreState {
  withHash: boolean
  toggle: () => void
}
const useWithHashStore = create<StoreState>((set) => ({
  withHash: false,
  toggle: () => set((state) => ({ withHash: !state.withHash })),
}))

export default useWithHashStore
