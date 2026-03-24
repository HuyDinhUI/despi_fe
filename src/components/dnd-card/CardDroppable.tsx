"use client";

import { useDroppable } from "@dnd-kit/core";
import { Card as CardType } from "@/src/@types/card";
import { Card } from "./Card";

type CardDroppableProps = {
  id: string;
  card?: CardType;
  keyword: string;
};

export const CardDroppable = ({ id, card, keyword }: CardDroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({ id, data: { keyword } });

  return (
    <div
      ref={setNodeRef}
      className={`border-2 border-dashed rounded border-gray-300 w-30 h-50 ${isOver ? "opacity-50" : "opacity-100"} flex justify-center items-center`}
    >
      <div
        className={`text-[10px] uppercase ${isOver ? "opacity-100 text-white" : "opacity-50"}`}
      >
        {keyword}
      </div>
      {card ? (
        <Card
          front={card.image}
          flip={true}
          classmame={"transition-transform duration-500"}
        />
      ) : null}
    </div>
  );
};
