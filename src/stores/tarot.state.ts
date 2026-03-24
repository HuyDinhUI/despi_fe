"use client";

import { create } from "zustand";
import { Card } from "../@types/card";

interface PlacedCard {
  idSlot: string;
  keyword: string;
  card: Card;
}

interface TarotState {
  cards: Card[];
  placed: PlacedCard[];
  activeId: number | null;
  question: string;

  setCards: (cards: Card[]) => void;
  setPlaced: (card: Card) => void;
  setQuestion: (q: string) => void;
  handleDragStart: (event: any) => void;
  handleDragEnd: (event: any) => void;
}

export const useCardStore = create<TarotState>()((set, get) => ({
  cards: [],
  placed: [],
  activeId: null,
  question: "",

  setCards(cards) {
    set({ cards: cards });
  },

  setQuestion(q) {
    set({ question: q });
  },

  // Click to choice

  setPlaced(card) {
    if (get().placed.length === 3) return;

    let idSlot = "";
    const keywords = ["past", "present", "future"];

    const placeIndexCurrent = get().placed.length;
    idSlot = "place-" + (placeIndexCurrent + 1);

    set({
      placed: [
        ...get().placed,
        { idSlot, card, keyword: keywords[placeIndexCurrent] },
      ],
    });
    set({ cards: get().cards.filter((item) => item.id !== card.id) });
  },

  // Drag Drop to choice

  handleDragStart(event) {
    set({ activeId: event.active.id });
  },

  handleDragEnd(event) {
    if (get().placed.length >= 3) {
      set({ activeId: null });
      return;
    }

    const { active, over } = event;

    if (over) {
      if (get().placed.find((i) => i.idSlot === over.id)?.card) return;

      set({
        placed: [
          ...get().placed,
          {
            idSlot: over.id,
            card: active.data.current,
            keyword: over.data.current.keyword,
          },
        ],
      });
      set({ cards: get().cards.filter((item) => item.id !== active.id) });
    }

    set({ activeId: null });
  },
}));
