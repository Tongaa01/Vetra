import { create } from "zustand";
import type { ICartBody } from "../types/ICartBody";


interface ICartStore {
    activeCart: ICartBody[];
    setActiveCart: (cart: ICartBody[]) => void;
    deleteCart: () => void;
    // addToCart: (product: IProduct) => void
}

export const useCartStore = create<ICartStore>((set) => ({
    activeCart: [],
    setActiveCart: (cart) => set(() => ({ activeCart: cart })),
    deleteCart: () => set(() => ({ activeCart: [] })),
    // addToCart: (product)=> set(()=> ({[...activeCart, product]}))
}));
