import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold underline">Pothole detcetion Project</h1>
      </div>

      <div className="flex w-full items-center justify-center p-4 ">
        <svg
          className=" button-icon bg-white rounded-2xl size-15"
          role="presentation"
          aria-hidden="true"
        >
          <use href="/icons.svg#x-icon"></use>
        </svg>
      </div>
    </div>
  );
}
