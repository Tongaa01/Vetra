import { create } from "zustand";
import type { ICheckoutBody } from "../types/ICheckoutBody";


interface ICheckoutStore {
    activeCheckout: ICheckoutBody | 0;
    setActiveCheckout: (checkout: ICheckoutBody) => void;
    deleteCheckout: () => void;
    // addToCart: (product: IProduct) => void
}

export const useCheckoutStore = create<ICheckoutStore>((set) => ({
    activeCheckout: 0,
    setActiveCheckout: (checkout) => set(() => ({ activeCheckout: checkout })),
    deleteCheckout: () => set(() => ({ activeCheckout: 0})),
    // addToCart: (product)=> set(()=> ({[...activeCart, product]}))
}));