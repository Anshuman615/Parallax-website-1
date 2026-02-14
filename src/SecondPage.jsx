import React from "react";

export default function SecondPage({ onBack }) {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl">Second Page</h1>
      <p className="mt-4 text-lg">A simple page with the same black background.</p>
      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 bg-white text-black rounded-md"
      >
        Back
      </button>
    </div>
  );
}
