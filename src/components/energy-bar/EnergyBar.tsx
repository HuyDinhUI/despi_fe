import { Zap } from "lucide-react";

type EnergyBarProps = {
  energy: number;
};

export default function EnergyBar({ energy }: EnergyBarProps) {
  const width = (energy / 100) * 100;
  return (
    <div className="flex gap-2 items-center p-1 ring ring-gray-200 rounded-full shadow">
      <Zap size={15} fill="black" />
      <div className="h-3 w-20">
        <div
          className="transition-all rounded-full bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          style={{ width: `${width}%`, height: '100%'}}
        ></div>
      </div>
    </div>
  );
}
