import { useState } from "react";
export default function BG() {
  let [color, setColor] = useState("red");

  return (
    <>
      <div
        className="text-3xl font-bold underline text-center"
        style={{ backgroundColor: color }}
      >
        hello !
      </div>
      <button class="block " onClick={() => setColor("green")}>
        green
      </button>
      <button class="block " onClick={() => setColor("blue")}>
        green
      </button>
      <button class="block " onClick={() => setColor("red")}>
        green
      </button>
      <button class="block " onClick={() => setColor("yellow")}>
        green
      </button>
      <button class="block " onClick={() => setColor("olive")}>
        green
      </button>
      <button class="block " onClick={() => setColor("gray")}>
        green
      </button>
      <button class="block " onClick={() => setColor("black")}>
        green
      </button>
      <button class="block " onClick={() => setColor("white")}>
        green
      </button>
    </>
  );
}
