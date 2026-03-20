import InputQuestionTarot from "@/src/components/input-question-tarot";
import Image from "next/image";

export default function TarotPage() {
  return (
    <div>
      <section id="hero" className="flex justify-center">
        <div className="w-[min(1100px,90vw)] flex flex-col items-center mt-10">
          <h1 className="text-[clamp(25px,5vw,50px)] font-bold">Tarot</h1>
          <p className="text-[clamp(20px,5vw,25px)]">
            {`" I see through your soul. "`}
          </p>
          <div className="mt-7">
            <Image
              src={"/hand-tarot.svg"}
              width={400}
              height={300}
              alt="hand-tarot"
            />
          </div>
          <InputQuestionTarot />
          <div className="mt-5 flex flex-col justify-center items-center">
            <span className="uppercase text-[clamp(5px,5vw,10px)] text-gray-600">scroll learn more</span>
            <div className="w-px h-7 mt-2 bg-linear-to-b from-black to-white"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
