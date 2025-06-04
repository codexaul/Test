import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const products = [
  {
    name: "Silk Abaya",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1610530351195-a1e2ded68fa3?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Embroidered Hijab",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Elegant Kaftan",
    price: "$95",
    image:
      "https://images.unsplash.com/photo-1582281298054-1db422f68d82?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current!.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-white to-emerald-50">
      <h1 className="text-3xl font-bold mb-8 text-center font-brand text-emerald-900">Welcome to Lux Muslim Fashion</h1>
      <div ref={gridRef} className="grid gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="rounded-lg p-4 flex flex-col items-center shadow-lg bg-white/40 backdrop-blur border border-emerald-200"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={250}
              className="object-cover rounded"
            />
            <h2 className="mt-4 font-semibold">{product.name}</h2>
            <span className="text-gray-600">{product.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
