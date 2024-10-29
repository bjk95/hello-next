import { produce } from "immer";
import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'

export const useBearStore = create<State & Action>()(immer((set) => ({
    bears: 0,
    typesOfBear: [],
    trivia: {
        fact: "Bears are cool",
        source: "https://www.bearfacts.com"
    },
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
    removeAllBears: () => set({ bears: 0 }),
    addBearType: (type: string) => set((state) => ({ typesOfBear: [...state.typesOfBear, type] })),
    removeBearType: (type: string) => set((state) => ({ typesOfBear: state.typesOfBear.filter((t) => t !== type) })),
    updateTriviaFact: (fact: string) => set((state) => {state.trivia.fact = fact;}),
})));

type State = {
    bears: number;
    typesOfBear: string[],
    trivia: {
        fact: string;
        source: string;
    }
}

type Action = {
    increasePopulation: () => void;
    decreasePopulation: () => void;
    removeAllBears: () => void;
    addBearType: (type: string) => void;
    removeBearType: (type: string) => void;
    updateTriviaFact: (fact: string) => void;
}


