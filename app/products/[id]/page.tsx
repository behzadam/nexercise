export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
