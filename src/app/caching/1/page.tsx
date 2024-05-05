/* eslint-disable @next/next/no-img-element */
export default async function Page() {
  const randomImage = await fetch("https://picsum.photos/300/300?grayscale", {
    cache: "no-store",
  }).then((res) => {
    return res.url;
  });

  return (
    <div className="grid place-content-center min-h-screen">
      <p className="text-center text-lg">cache: no-store</p>
      <p className="text-center text-sm mb-4 text-neutral-500">
        In HTTP protocol no-store means no cache.
      </p>
      <img
        src={randomImage}
        alt="Random Image"
        width={300}
        height={300}
        className="object-cover object-center"
      />
    </div>
  );
}
