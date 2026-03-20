"use client";

import { useDraggable } from "@dnd-kit/core";
import { Card, CardDraggableProps } from "./Card";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "motion/react";

export const CardDraggable = ({
  id,
  isPlaced,
  index,
  data,
}: CardDraggableProps) => {
  const { attributes, listeners, setNodeRef, isDragging, transform } =
    useDraggable({ id, data });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
    cursor: isPlaced ? "not-allowed" : "grab",
    zIndex: index,
    
    touchAction: "none",
  };

  return (
    <motion.div
      initial={{ left: 0 }}
      animate={{ left: index * 15 }}
      transition={{duration: 1, type: "spring"}}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="absolute w-25 h-45 top-15"
    >
      <Card front={data.front} classmame={"hover:translate-y-[-10px]"} />
    </motion.div>
  );
};
