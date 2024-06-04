import Link from "next/link";

export default function Page() {
  let products = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="mb-4 font-semibold font-serif text-4xl">Products</h1>
      <div className="grid gap-4 auto-rows-max grid-cols-2 sm:grid-cols-3">
        {products.map((id) => (
          <Link
            className="bg-slate-900 rounded-md aspect-square w-full flex items-center justify-center"
            key={id}
            href={`/products/${id}`}
            passHref
          >
            {id}
          </Link>
        ))}
      </div>
    </div>
  );
}
