"use client";

import { CardDraggable } from "@/src/components/dnd-card/CardDraggable";
import { CardDroppable } from "@/src/components/dnd-card/CardDroppable";
import InputQuestionTarot from "@/src/components/input-question-tarot";
import { Button } from "@/src/components/ui/button";
import { mockDataCard } from "@/src/mock/cardPhotos.mock";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Image from "next/image";
import { useState } from "react";

type Placed = {
  idSlot: number;
  card: { id: string; front: string; name: string };
};

export default function Desk() {
  const [dataCard, setDataCard] = useState(mockDataCard);
  const [placed, setPlaced] = useState<Placed[]>([]);
  const [question, setQuestion] = useState("");
  const [activeId, setActiveId] = useState(null);
  const pointerSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },
  });

  const sensors = useSensors(pointerSensor);
  const handleDragStart = (event: any) => {
    console.log(event);
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    console.log(event);

    if (placed.length >= 3) {
      setActiveId(null);
      return;
    }

    const { active, over } = event;
    if (placed.find((i) => i.idSlot === over.id)?.card) return;
    if (over) {
      setPlaced((prev) => [
        ...prev,
        { idSlot: over.id, card: active.data.current },
      ]);
      setDataCard((prev) => prev.filter((card) => card.id !== active.id));
    }

    setActiveId(null);
  };
  return (
    <div>
      <div className="flex flex-col items-center relative">
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          {/* Bộ bài */}
          <div className="fixed bottom-50 left-20">
            {dataCard.map((front, i) => (
              <CardDraggable
                data={front}
                index={i}
                key={front.id}
                id={front.id}
                front={front.front}
                isPlaced={placed.some((p) => p.card.id === front.id)}
              />
            ))}
          </div>

          <div className="flex justify-center items-center mt-10 space-x-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <CardDroppable
                key={i}
                id={i}
                card={placed.find((c) => c.idSlot === i)?.card}
              />
            ))}
          </div>
          <div className="mt-2">
            <InputQuestionTarot/>
          </div>

          <DragOverlay>
            {activeId !== null ? (
              <div className="w-25 h-45 absolute bg-white">
                <Image
                  fill
                  src={"/card/back/card-back-white.webp"}
                  alt="back"
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      </div>
    </div>
  );
}
