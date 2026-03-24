import Link from "next/link";
import Desk from "./desk";
import { ChevronDown, PlusCircle, Sparkles } from "lucide-react";
import { TarotCard } from "@/src/assets/icon";
import { Button } from "@/src/components/ui/button";

export default function TarotPage() {
  return (
    <main>
      <section id="hero" className="flex justify-center">
        <div className="w-[min(1100px,90vw)] flex flex-col items-center mt-10">
          <div className="flex items-center gap-2">
            <TarotCard/>
            <h1 className="text-[clamp(25px,5vw,50px)] font-bold">Tarot.</h1>
          </div>
          <p className="text-[clamp(20px,5vw,30px)] font-sageffine">
            {`I see through your soul.`}
          </p>
          <Desk />
          <Link href={"#meaning"} className="mt-10 flex flex-col justify-center items-center uppercase text-[10px]">
            Scroll to view mean
            <div className="flex flex-col justify-center items-center bg-black rounded-full p-1 w-5 h-5 mt-3">
              <ChevronDown color="white" />
            </div>
          </Link>
        </div>
      </section>
      <section id="meaning" className="flex justify-center min-h-screen">
        <div className="w-[min(700px,90vw)] flex flex-col items-center mt-30">
          <span className="text-sm uppercase">overview</span>
          <h2 className="text-[clamp(25px,5vw,40px)] font-bold">The Three-Card Spread</h2>
          <div className=" mt-10 text-justify flex flex-col gap-5 font-sageffine font-bold text-[clamp(10px,5vw,20px)]">
            <p>The resonance of your past, anchored by The High Priestess, suggests a period of profound internal growth and silence. You have been navigating the unseen, gathering wisdom that now seeks expression.</p>
            <p>Currently, The Moon cast shadows over your path. This is not a warning of danger, but a call to trust your intuition over your logic. Things are not as they appear; the silver light reveals textures that the sun hides. Embrace the ambiguity of this moment.</p>
            <p>{'"In the convergence of these energies, your path toward The Star is already illuminated. Clarity will arrive when you stop seeking it through the eyes of others."'}</p>
            <p className="border-l ps-5 italic mt-10">The final manifestation leads to healing. The Star indicates that your current uncertainty is merely the night before a particularly bright dawn. Maintain your hope as a practical tool, not just an emotion.</p>
          </div>
          <div className="mt-10 flex gap-2">
            <Button variant="icon" size="ic" icon={<PlusCircle size={15}/>}/>
            <Button variant="icon" size="ic" icon={<Sparkles size={15}/>}/>
          </div>
        </div>
      </section>
    </main>
  );
}
