"use client";
import Dashboard from "../../components/Dashboard";
import { useEffect, useState } from "react";

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/api/images")
        .then(response => response.json())
        .then(data => setImages(data.images));
  }, []);

  return (
      <main className={"max-w-4xl mx-auto my-12 space-y-5"}>
        <h1 className={"p-10 text-3xl font-bold text-gray-900 text-center bg-gray-400"}>Welcome to the dashboard</h1>
        <div>
          <h1 className={"p-10 text-2xl font-semibold text-gray-900 bg-gray-400 text-center"}>Images</h1>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
                <div key={index} className="p-2">
                  <img src={image.url} alt={image.name} className="w-full h-auto" />
                </div>
            ))}
          </div>
        </div>
      </main>
  );
}