"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { QuestionSuggest } from "@/src/@types/questionSuggest";
import { useCardStore } from "@/src/stores/tarot.state";

type props = {
  questionSuggest?: QuestionSuggest[];
};

const InputQuestionTarot = ({ questionSuggest }: props) => {
  const { question, setQuestion, placed } = useCardStore();
  return (
    <div className="ring ring-gray-200 shadow rounded w-[min(600px,90vw)] p-5 mt-10">
      <div className="flex">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 outline-none"
          name="question"
          placeholder="Enter question..."
        ></input>
        {placed.length === 3 && question && (
          <Button variant="icon" size="ic" icon={<ChevronRight size={15} />} />
        )}
      </div>
      <div className="flex items-center gap-5 mt-5">
        {questionSuggest?.map((item) => (
          <Button
            key={item.id}
            title={item.question}
            variant="outline"
            className="text-[10px] rounded text-gray-400 hover:text-gray-500"
            onClick={() => setQuestion(item.question)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputQuestionTarot;
