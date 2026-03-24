"use client";

import { CardDraggable } from "@/src/components/dnd-card/cardDraggable";
import { CardDroppable } from "@/src/components/dnd-card/cardDroppable";
import InputQuestionTarot from "@/src/components/input-question-tarot";
import { mockDataCard } from "@/src/mock/cardPhotos.mock";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { useCardStore } from "@/src/stores/tarot.state";
import { useEffect } from "react";
import { QuestionSuggestMock } from "@/src/mock/questionSuggest.mock";

const places = [
  {
    id: "place-1",
    keyword: "past"
  },
  {
    id: "place-2",
    keyword: "present"
  },
  {
    id: "place-3",
    keyword: "future"
  }
]

export default function Desk() {
  const { cards, placed, activeId, handleDragEnd, handleDragStart, setCards } =
    useCardStore();
  const pointerSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 5 },
  });
  const sensors = useSensors(pointerSensor);

  useEffect(() => {
    setCards(mockDataCard);
  }, [setCards]);

  return (
    <>
      <div className="flex flex-col items-center relative">
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          {/* Bộ bài */}

          <div className="grid grid-cols-4 justify-center items-center mt-10 space-x-4">
            {places.map((i) => (
              <CardDroppable
                key={i.id}
                keyword={i.keyword}
                id={i.id}
                card={placed.find((c) => c.idSlot === i.id)?.card}
              />
            ))}
            <div className="w-30 h-50 shadow-md">
              {cards.map((front, i) => (
                <CardDraggable
                  data={front}
                  index={i}
                  key={front.id}
                  id={front.id}
                  front={front.image}
                  isPlaced={placed.some((p) => p.card.id === front.id)}
                />
              ))}
            </div>
            {placed.length < 3 && (
              <motion.div
                animate={{ x: [0, 5, 0], transition: { repeat: Infinity } }}
                exit={{ x: 30 }}
                transition={{ type: "tween", duration: 5 }}
                className="flex items-center absolute -right-10 text-sm"
              >
                <ChevronLeft size={15} />
                Draw
              </motion.div>
            )}
          </div>
          <div className="mt-2">
            <InputQuestionTarot questionSuggest={QuestionSuggestMock}/>
          </div>

          <DragOverlay>
            {activeId !== null ? (
              <div className="w-30 h-50 absolute bg-white">
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
    </>
  );
}
