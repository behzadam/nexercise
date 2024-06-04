import DialogProduct from "@/components/dialog-product";

export default function ProductDialog({
  params: { id: productId },
}: {
  params: { id: string };
}) {
  return <DialogProduct id={productId} />;
}
