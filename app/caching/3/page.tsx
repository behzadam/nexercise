/* eslint-disable @next/next/no-img-element */
export const dynamic = "force-dynamic";

export default async function Page3() {
  const randomImage = await fetch("https://picsum.photos/350/300?grayscale", {
    next: { revalidate: 60 },
  }).then((res) => {
    return res.url;
  });

  return (
    <div className="grid place-content-center">
      <p className="text-center text-lg mb-4">cache: for 60 seconds</p>
      <img
        src={randomImage}
        alt="Random Image"
        width={350}
        height={300}
        className="object-cover object-center mx-auto"
      />
    </div>
  );
}
