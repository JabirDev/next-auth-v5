import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function Home() {
  const steps = [
    {
      isDone: false,
      step: "Custom Sign In Page",
    },
    {
      isDone: false,
      step: "Custom Sign Out Page",
    },
    {
      isDone: false,
      step: "Middleware Protected Route",
    },
    {
      isDone: false,
      step: "Google One Tap Sign In",
    },
  ];
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-col items-center justify-center w-full h-full">
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <Image src={"/jabirdev.png"} width={120} height={120} alt="Logo" />
          </div>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Tutorial Next Auth v5
          </h2>
          <div className="flex flex-col gap-4">
            {steps.map((item, index) => (
              <div className="flex items-center space-x-2" key={index}>
                <Checkbox id={`step-${index}`} defaultChecked={item.isDone} />
                <label
                  htmlFor={`step-${index}`}
                  className="text-sm font-medium cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item.step}
                </label>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
