"use client";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-header mb-2">Andrew Yong</h1>
      <p className="text-xl font-sans mb-8">Click to describe Andrew</p>

      <div className="grid grid-cols-2">
        <p>Concaly</p>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
        </div>
        <p>Mudboard</p>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
          <div className="w-4 h-4 bg-amber-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
