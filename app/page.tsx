"use client";

import BearCounter from "./bear-counter";
import { useBearStore } from "./bear-store";
import BearTrivia from "./bear-trivia";

export default function Home() {
  const bears = useBearStore((state) => state.bears);
  console.log(`current location is ${location}`)

  const bearTypes = useBearStore((state) => state.typesOfBear);
  const removeBearType = useBearStore((state) => state.removeBearType);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <BearCounter />
        <span>At home, there are {bears} bears.</span>
        <span>There bears of types</span>
        <ul>
          {bearTypes.map((type) => (
            <li key={type}>{type}<button onClick={() => removeBearType(type)}>-</button></li>
          ))}
        </ul>
        <BearTrivia />
      </div>
    </main>
  );
}
