import Image from "next/image";
import { Button } from "../components/ui/button";
import { HandControl, HandSpirit, MoonCouple } from "../assets/icon";

const FEATURES_LIST = [
  {
    id: "wit-1",
    src: "/wit-1.svg",
    description:
      "Deep symbolic interpretation of the major and minor arcana through neural archetypal analysis.",
  },
  {
    id: "wit-2",
    src: "/wit-2.svg",
    description:
      "Precise celestial mapping based on your exact birth moment, calculated via planetary ephemeris.",
  },
  {
    id: "wit-3",
    src: "/wit-3.svg",
    description:
      "Ancient Eastern wisdom met with modern neural processing to reveal your fundamental elements.",
  },
];

export default function Home() {
  return (
    <div>
      <section id="hero" className="flex justify-center">
        <div className="w-[min(1100px,90vw)] flex flex-col items-center mt-10">
          <h1 className="text-[clamp(25px,5vw,50px)] font-bold">Despi.</h1>
          <p className="text-[clamp(20px,5vw,25px)] font-sageffine">
            Destiny is not written. It is interpreted.
          </p>
          <Button
            title="Discover your destiny"
            variant="dark"
            className="mt-5"
          />

          <div className="mt-7">
            <HandControl />
          </div>
        </div>
      </section>
      <section id="decode-the-university" className="">
        <div className="flex flex-col justify-center px-50 bg-foreground min-h-[70vh] text-white">
          <h2 className="font-bold text-center text-[clamp(10px,5vw,15px)] w-full uppercase mb-10">
            Decode the Universiry
          </h2>
          <div className="grid xl:grid-cols-3 gap-20 mt-10">
            {FEATURES_LIST.map((item) => (
              <div key={item.id} className="flex flex-col items-center group">
                <div className="group-hover:animate-plink">
                  <Image src={item.src} width={70} height={50} alt={item.src} />
                </div>
                <p className="text-center text-[clamp(10px,5vw,15px)] mt-5 font-bold">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="ai-spiritual-profile">
        <div className="grid grid-cols-2 min-h-[80vh]">
          <div className="p-30">
            <h2 className="text-[clamp(20px,5vw,30px)] font-bold">
              Your AI Spiritual Profile
            </h2>
            <p className="text-[clamp(10px,5vw,15px)] mt-5 text-justify">
              {` Despi doesn't just read charts; it constructs a living **Destiny
              Map**. By synthesizing billions of data points from global
              esoteric traditions—Tarot, Astrology, I-Ching, and Numerology—our
              AI creates a dynamic spiritual profile that evolves with you.`}
            </p>
            <div className="grid grid-cols-2 gap-10 mt-5">
              <div className="flex gap-3">
                <HandSpirit width="30px" height="30px" />
                <div>
                  <strong className="uppercase text-[15px]">
                    neural synastry
                  </strong>
                  <p>Mapping energetic alignment with others.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MoonCouple width="30px" height="30px" />
                <div>
                  <strong className="uppercase text-[15px]">
                    esoteric data
                  </strong>
                  <p>Synthesized insights from global traditions.</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section id="compatibility-engine">
        <div className="bg-gray-100 min-h-[70vh] flex flex-col items-center">
          <h2 className="font-bold text-[clamp(25px,5vw,35px)] mt-20">Compatibility Engine</h2>
          <p className="mt-10 text-[clamp(10px,5vw,15px)]">
            Beyond sun signs. Our engine compares the core energetic frequencies
            of two individuals across 12 dimensions of synastry.
          </p>
        </div>
      </section>
    </div>
  );
}
