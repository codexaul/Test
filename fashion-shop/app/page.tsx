import Image from "next/image";

const products = [
  {
    name: "Classic Tee",
    price: "$20",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Denim Jacket",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Leather Boots",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1528701800489-20f69c83d535?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Fashion Shop</h1>
      <div className="grid gap-6 sm:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.name}
            className="border rounded-lg p-4 flex flex-col items-center"
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
