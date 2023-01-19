import { create } from 'zustand'
interface BearState {
  withHash: boolean
  toggle: () => void
}
const useWithHashStore = create<BearState>((set) => ({
  withHash: false,
  toggle: () => set((state) => ({ withHash: !state.withHash })),
}))

export default useWithHashStore
