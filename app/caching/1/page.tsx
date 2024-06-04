/* eslint-disable @next/next/no-img-element */
export const dynamic = "force-dynamic";

export default async function Page1() {
  const randomImage = await fetch("https://picsum.photos/300/300?grayscale", {
    cache: "no-store",
    next: { revalidate: 0 },
  }).then((res) => {
    return res.url;
  });

  return (
    <div className="grid place-content-center">
      <p className="text-center text-lg mb-4">cache: no!</p>
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
