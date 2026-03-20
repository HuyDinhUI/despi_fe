"use client";

import { useDroppable } from "@dnd-kit/core";
import { Card } from "./Card";
import Image from "next/image";

type CardDroppableProps = {
  id: number;
  card?: Card;
};

export const CardDroppable = ({ id, card }: CardDroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`border-2 border-dashed border-gray-400 bg-gray-100 w-30 h-50 ${isOver ? "opacity-50" : "opacity-100"} flex justify-center items-center`}
    >
      <div
        className={`text-[50px] ${isOver ? "opacity-100 text-white" : "opacity-50"}`}
      >
        <Image src={'/logo_despi.png'} width={30} height={30} alt="logo despi"/>
      </div>
      {card ? (
        <Card
          front={card.front}
          flip={true}
          classmame={"transition-transform duration-500"}
        />
      ) : null}
    </div>
  );
};
