"use client"

import Image from "next/image";

export type Card = {
  id: string;
  front: string;
};

export type CardDraggableProps = {
  id: string;
  front: string;
  isPlaced: boolean;
  index: number;
  data: Card;
};

export type CardProps = {
  front: string;
  classmame?: string;
  flip?: boolean;
};

export const Card = ({ front, classmame, flip }: CardProps) => {
  return (
    <div
      className={`absolute w-25 h-45 perspective-distant ${classmame}`}
    >
      <div className={`relative w-full h-full transform-3d transition-transform duration-500 ${flip ? 'animate-flip' : 'animate-shuffle'}`}>
        <div
          className={`bg-white p-1 card-front absolute w-full h-full backface-hidden rounded-lg shadow-lg ${flip ? '' : 'rotate-y-180'}`}
        >
          <Image fill src={front} alt="front" className="w-full h-full rounded-sm shadow-lg" />
        </div>
        <div className={`card-back bg-white absolute w-full h-full backface-hidden ${flip ? 'rotate-y-180' : ''}`}>
          <Image fill src={'/card/back/card-back-white.webp'} alt="back" />
        </div>
      </div>
    </div>
  );
};