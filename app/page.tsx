"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  return (
    <div className="flex flex-col items-center bg-blue-200 p-4">
      <h3 className="font-medium text-2xl">Hi {name}</h3>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
