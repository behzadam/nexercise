/* eslint-disable @next/next/no-img-element */

export const dynamic = "force-dynamic";

export default async function Page() {
  const randomImage = await fetch(
    "https://picsum.photos/300/300?grayscale"
  ).then((res) => {
    return res.url;
  });

  return (
    <div className="grid place-content-center min-h-screen">
      <p className="text-center text-lg">dynamic: force-dynamic</p>
      <p className="text-center text-sm mb-4 text-neutral-500">
        Opt out of caching for all data requests in the route segment. 
        <a
          className="text-blue-500"
          href="https://nextjs.org/docs/app/building-your-application/caching#opting-out-1"
        >
          More
        </a>
      </p>
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
