"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useCardStore } from "@/src/stores/tarot.state";
import { Card, CardDraggableProps } from "./card";

export const CardDraggable = ({
  id,
  isPlaced,
  index,
  data,
}: CardDraggableProps) => {
  const { setPlaced } = useCardStore();
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({ id, data });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
    cursor: isPlaced ? "not-allowed" : "grab",
    touchAction: "none",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-30 h-50 absolute top-10"
      onClick={() => setPlaced(data)}
    >
      <Card front={data.image} classmame="hover:translate-x-2 transition-all" />
    </div>
  );
};
