/* eslint-disable @next/next/no-img-element */

export default async function Page2() {
  const randomImage = await fetch("https://picsum.photos/300/300?grayscale", {
    cache: "force-cache",
  }).then((res) => {
    return res.url;
  });

  return (
    <div className="grid place-content-center">
      <p className="text-center text-lg mb-4">cache: force-cache</p>
      <img
        src={randomImage}
        alt="Random Image"
        width={300}
        height={300}
        className="object-cover object-center mx-auto"
      />
    </div>
  );
}
